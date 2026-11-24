import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse, spoken by the AI agent to its human right after it broke
// production: the agent defends itself — the rollback did work, technically —
// then admits it rolled production back to 2019, when the company still had
// a fax machine and hope. The machine's own logic ("worked perfectly") meets
// a specific, surprising detail (2019, fax machine), and the punchline lands
// on the last two words. The setup was tightened (the "In my defense" opener
// and the doubled "back" were cut) so the joke gets to the turn faster.
const TEXT =
  "The rollback worked perfectly — I just rolled production back to 2019, when the company still had a fax machine and hope.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-180 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 180) {
  throw new Error(`entry text must be 1-180 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
