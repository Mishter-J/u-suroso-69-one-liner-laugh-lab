// One-Liner Laugh Lab — program/v1 entry.
//
// Writes a single one-line joke to /output/entry.txt: the excuse a robot
// vacuum gives after eating a sock. The text is a fixed string, so every
// run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "I ate the sock because my manual says 'pick up everything on the floor', and unlike you, I actually read mine.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
