import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const master = resolve('public/favicon-master-2.webp');
const outputs = [
    { size: 32, path: resolve('public/favicon-32x32.webp'), format: 'webp' },
    { size: 48, path: resolve('public/favicon-48x48.webp'), format: 'webp' },
    { size: 192, path: resolve('public/favicon-192x192.webp'), format: 'webp' },
    { size: 512, path: resolve('public/favicon-512x512.webp'), format: 'webp' },
    { size: 180, path: resolve('public/apple-touch-icon.png'), format: 'png' },
];

const image = sharp(master);
const metadata = await image.metadata();

if (!metadata.width || !metadata.height || metadata.width !== metadata.height) {
    throw new Error(
        `Expected public/favicon-master-2.webp to be square, received ${metadata.width ?? '?'}×${metadata.height ?? '?'}.`,
    );
}

const circularMask = (size) =>
    Buffer.from(
        `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white" />
        </svg>`,
    );

await Promise.all(
    outputs.map(async ({ size, path, format }) => {
        await mkdir(dirname(path), { recursive: true });

        const resized = sharp(master)
            .resize(size, size, {
                fit: 'cover',
                kernel: sharp.kernel.lanczos3,
            })
            .composite([
                {
                    input: circularMask(size),
                    blend: 'dest-in',
                },
            ]);

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
