import { mkdirSync, writeFileSync } from "node:fs";
const line = "Weekly status: everything is fine, according to the monitoring system that has been down since Monday, so this report is a guess with excellent formatting.";
const limit = 200;
if (line.length < 1 || line.length > limit) throw new Error("entry text must be 1-200 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
