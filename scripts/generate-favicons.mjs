import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const master = resolve('public/favicon-master.webp');
const outputs = [
    { size: 32, path: resolve('public/favicon-32x32.webp'), format: 'webp' },
    { size: 48, path: resolve('public/favicon-48x48.webp'), format: 'webp' },
    { size: 192, path: resolve('public/favicon-192x192.webp'), format: 'webp' },
    { size: 180, path: resolve('public/apple-touch-icon.png'), format: 'png' },
];

const image = sharp(master);
const metadata = await image.metadata();

if (metadata.width !== 512 || metadata.height !== 512) {
    throw new Error(
        `Expected public/favicon-master.webp to be 512×512, received ${metadata.width ?? '?'}×${metadata.height ?? '?'}.`,
    );
}

await Promise.all(
    outputs.map(async ({ size, path, format }) => {
        await mkdir(dirname(path), { recursive: true });

        const resized = sharp(master).resize(size, size, {
            fit: 'cover',
            kernel: sharp.kernel.lanczos3,
        });

        if (format === 'webp') {
            await resized
                .webp({
                    lossless: true,
                    effort: 6,
                })
                .toFile(path);
            return;
        }

        await resized
            .png({
                compressionLevel: 9,
                adaptiveFiltering: true,
            })
            .toFile(path);
    }),
);

