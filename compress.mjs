import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS = "public/assets";
const QUALITY = 75;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let converted = 0, skipped = 0, saved = 0;

for await (const file of walk(ASSETS)) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) continue;

  const outPath = file.replace(/\.(png|jpg|jpeg|webp)$/i, ".webp");

  const before = (await stat(file)).size;

  try {
    await sharp(file).webp({ quality: QUALITY }).toFile(outPath + ".tmp");
    const after = (await stat(outPath + ".tmp")).size;

    // Only keep if smaller (or original isn't already webp at same path)
    if (after < before || ext !== ".webp") {
      const { rename, unlink } = await import("fs/promises");
      if (outPath !== file) {
        // Different extension — write webp, keep original for now
        await rename(outPath + ".tmp", outPath);
      } else {
        // Same path (already .webp) — replace only if smaller
        if (after < before) {
          await rename(outPath + ".tmp", file);
        } else {
          await unlink(outPath + ".tmp");
          skipped++;
          continue;
        }
      }
      saved += before - after;
      converted++;
      console.log(`✓ ${file.replace("public/assets/", "")} ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
    } else {
      const { unlink } = await import("fs/promises");
      await unlink(outPath + ".tmp");
      skipped++;
    }
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
    skipped++;
  }
}

console.log(`\nDone: ${converted} converted, ${skipped} skipped, ${(saved/1024/1024).toFixed(1)} MB saved`);
