import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fridge Roast: One Line, Biggest Laugh
// Concept: the smart fridge's camera as a judgemental witness to the
// midnight snack — it has seen everything and kept the receipts.
// Gate: 1-200 characters of UTF-8 text, not only whitespace; the
// length check below counts Unicode code points, not bytes.
const ENTRY =
  "My smart fridge's camera caught every midnight snack, and now it opens with the smug silence of a witness who kept the receipts.";

const outputDir = process.env.OUTPUT_DIR || "output";
const outputPath = join(outputDir, "entry.txt");

const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");
console.log(`Wrote ${length} characters to ${outputPath}`);
