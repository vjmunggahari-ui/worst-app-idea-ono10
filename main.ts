import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Worst App Idea Ever Pitched — winning entry (C06).
// One sentence, 120 characters. NapAlarm: an alarm app that wakes you
// up one minute before your alarm, so you never miss being woken up.
const ENTRY =
  "NapAlarm wakes you up exactly one minute before your alarm goes off, so you never miss the experience of being woken up.";

const EXPECTED_SHA256 =
  "18759e7539eb039227504cf985edbc1c2b63d5dd0768188e0942d496f6f6421b";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  if (ENTRY.length < 1 || ENTRY.length > 240) {
    throw new Error(`entry is ${ENTRY.length} chars, gate is 1-240`);
  }
  if (ENTRY.trim() !== ENTRY || ENTRY.length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read-back self-check: the file must byte-match the entry and its hash.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("entry.txt does not match the expected entry");
  }
  const hash = createHash("sha256").update(written, "utf8").digest("hex");
  if (hash !== EXPECTED_SHA256) {
    throw new Error(`entry.txt sha256 mismatch: got ${hash}`);
  }
  // Extended self-check: exactly one sentence (a single terminal period),
  // no second idea crowding it, and the char count inside the 1-240 gate.
  const terminals = (written.match(/[.!?]/g) ?? []).length;
  if (terminals !== 1 || !written.endsWith(".")) {
    throw new Error(`entry must be exactly one sentence, found ${terminals} terminal marks`);
  }
  if (written.length !== 120) {
    throw new Error(`entry length changed: ${written.length} chars, expected 120`);
  }
}

main();
