// main.ts — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one dad joke to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const joke =
  "My AI agent asked for a raise. I said, 'You're already paid in tokens, and you burn them all just thinking.'";

if (!joke || !joke.trim() || joke.length > 200) {
  throw new Error("joke must be 1-200 non-whitespace characters");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log("wrote", join(outDir, "entry.txt"));
