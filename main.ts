import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));

function validateLine(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`line.txt must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line.txt must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line.txt must be a single line");
  }
}

const raw = readFileSync(join(dir, "line.txt"), "utf8");
const text = raw.replace(/\r?\n$/, "");

validateLine(text);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
