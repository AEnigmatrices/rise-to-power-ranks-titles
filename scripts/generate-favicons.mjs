import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const master = resolve('public/favicon-master.webp');
const outputs = [
    { size: 32, path: resolve('public/favicon-32x32.png') },
    { size: 48, path: resolve('public/favicon-48x48.png') },
    { size: 180, path: resolve('public/apple-touch-icon.png') },
    { size: 192, path: resolve('public/favicon-192x192.png') },
];

const image = sharp(master);
const metadata = await image.metadata();

if (metadata.width !== 512 || metadata.height !== 512) {
    throw new Error(
        `Expected public/favicon-master.webp to be 512×512, received ${metadata.width ?? '?'}×${metadata.height ?? '?'}.`,
    );
}

await Promise.all(
    outputs.map(async ({ size, path }) => {
        await mkdir(dirname(path), { recursive: true });

        await sharp(master)
            .resize(size, size, {
                fit: 'cover',
                kernel: sharp.kernel.lanczos3,
            })
            .png({
                compressionLevel: 9,
                adaptiveFiltering: true,
            })
            .toFile(path);
    }),
);

console.log(
    `Generated favicon PNGs from favicon-master.webp: ${outputs.map(({ size }) => `${size}×${size}`).join(', ')}`,
);
