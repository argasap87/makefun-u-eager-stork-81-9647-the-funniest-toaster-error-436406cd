// The Funniest Toaster Error Message: the toast got too emotional,
// cried butter, and now the toaster needs a reboot with jam.
// An error message a real appliance would show, if appliances
// had feelings and a flair for drama.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 120 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "ERROR: Toast too emotional. It cried butter. Please reboot with jam.";

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 120 || entry.includes("\n")) {
    console.error("entry fails the gate: must be 1-120 characters, one line");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
