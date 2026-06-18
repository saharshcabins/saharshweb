import sharp from "sharp";
import { stat, rename, unlink } from "fs/promises";

const files = [
  { src: "public/assets/cabin/triango.webp", q: 70, width: 1920 },
  { src: "public/assets/cabin/rustico.webp", q: 70, width: 1920 },
  { src: "public/assets/team/sharad_chandak.JPG", out: "public/assets/team/sharad_chandak.webp", q: 75 },
];

for (const { src, out, q, width } of files) {
  const dest = out || src;
  const tmp = dest + ".tmp";
  const before = (await stat(src)).size;
  const pipeline = sharp(src);
  if (width) pipeline.resize(width, null, { withoutEnlargement: true });
  await pipeline.webp({ quality: q }).toFile(tmp);
  const after = (await stat(tmp)).size;
  if (after < before) {
    try { await unlink(dest); } catch {}
    await rename(tmp, dest);
    console.log(`✓ ${src.split("/").pop()} ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
  } else {
    await unlink(tmp);
    console.log(`- ${src.split("/").pop()} skipped (already optimal)`);
  }
}
