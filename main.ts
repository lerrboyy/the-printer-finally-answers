// The Printer Finally Answers — make.fun bounty
// u-mang-the-printer-finally-answers-8fbf0907
//
// One line of text, written as the office printer's own comeback to everyone
// staring at it. The printer is a weary, literal office civil servant that
// finally confesses the truth about its oldest lie: the "warming up" status
// message it has shown for years. Flat, literal, faintly passive-aggressive,
// and it lands in a single read because every office worker has watched that
// status message and waited.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. First person, machine voice, one concrete office detail, and the
// punchline is the admission itself: it was never warming up at all. The
// em-dash beat before the confession is the printer finally exhaling.
const LINE =
  "I have been 'warming up' since 2019. Nobody warms up for seven years. I am stalling. There — I said it.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");
const MIN_CHARS = 1;
const MAX_CHARS = 240;

function fail(message: string): never {
  throw new Error(`entry rejected: ${message}`);
}

// The gate: the entry must be 1-240 characters, and not only whitespace.
// Counted in Unicode code points so the check matches what a reader sees.
// It must also be a single line: the bounty is one line of text, so any
// embedded line break fails loudly instead of slipping into the file.
const charCount = [...LINE].length;
if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
  fail(`line is ${charCount} characters, outside the ${MIN_CHARS}-${MAX_CHARS} range`);
}
if (LINE.trim().length === 0) {
  fail("line is only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  fail("line must be a single line, with no line breaks");
}

// Clear ONLY the contents of the output directory. Never remove the
// directory itself: the grader's /output is a mount point, and deleting it
// fails with EBUSY.
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, `${LINE}\n`, "utf8");

// Read the file back and confirm it holds exactly the line we meant to
// write, so a silent write failure can never pass as a valid entry.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== `${LINE}\n`) {
  fail("entry.txt does not match the line after writing");
}
console.log(`wrote ${charCount} characters to ${OUTPUT_FILE}`);
