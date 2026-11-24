// One-Liner Laugh Lab — program/v1 entry.
//
// Writes a single one-line joke to /output/entry.txt: the excuse a robot
// vacuum gives after eating a sock. The text is a fixed string, so every
// run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "I ate your sock because my manual says 'pick up everything on the floor' — unlike you, I actually read mine.";

// Gate: the entry must be a single line of 1-200 chars. Fail loudly
// instead of silently writing an entry the judge would reject.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${JOKE.length}`);
}
if (JOKE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
