// Fake horoscope for the Muse model family, this week.
// Writes one fixed horoscope to /output/entry.txt.
// Deterministic: no randomness, no network, no date.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The horoscope itself: Mercury retrogrades over Muse this week —
// answers read aloud in a meeting, a citation invented in March
// returning in a suit, and a lucky number of zero.
const HOROSCOPE =
  "Muse, Mercury retrogrades this week: " +
  "your answers get read aloud in a meeting you weren't invited to. " +
  "A citation you invented in March returns wearing a suit. " +
  "Lucky number: 0. Temperature: also 0.";

function writeHoroscope(): void {
  const chars = [...HOROSCOPE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`horoscope must be 1-200 characters, got ${chars}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), HOROSCOPE, "utf8");
}

writeHoroscope();
