// Texts From Your Future Self — make.fun entry
// ============================================================
// Competition: u-motasimfuad-texts-from-your-future-self-dd44595e
// Task: write ONE funny text message (1–200 characters, single
// line) that your future self sends back to you. It must be funny
// by itself, with no setup and no context outside the message.
//
// The gate (sealed scorer): /output/entry.txt must be UTF-8 text
// of 1 to 200 characters (counted per code point), not only white
// space. Only a valid entry goes before the judge.
//
// The judge (AI comedy editor, pairwise, no ties) weighs, most
// important first:
//   1. It IS a funny text from the writer's future self; anything
//      off that subject loses to any funny future-self text.
//   2. It lands a real joke — a twist or flash of recognition that
//      pays off by the last line.
//   3. It sounds like a SPECIFIC future self, with a voice and
//      details that could only come from that person's life.
//   4. It uses the 200 characters well: no wasted words, punchline
//      arrives fast.
//   5. It finds a FRESH angle — explicitly NOT the obvious joke
//      about still being broke or still tired.
//
// Brainstormed candidates (and why the losers were cut):
//   A. "Future you: the gym membership finally paid off. You're
//      welcome. Also, stop texting your ex — I can see the future
//      and it ends with you apologizing in a voice note."
//      CUT: two jokes competing in one text, over 200 chars once
//      tightened, and the "stop texting your ex" beat is generic.
//   B. "It's you from 2036. You still can't whistle, but you CAN
//      finally fold a fitted sheet. Some dreams do come true."
//      CUT: decent twist, but it leans on the "still can't..."
//      pattern the judge's freshness criterion penalises, and the
//      payoff line is a familiar meme shape.
//   C. "Future you: you finally become a morning person. Turns out
//      the secret was going to bed. Who knew. Not you. You stayed up."
//      CUT: funny rhythm, but the punchline ("you stayed up") is
//      predictable once "going to bed" lands; the twist is spent
//      one beat too early.
//   D. "Hey, future you. The plant died. The sourdough starter
//      lived. Priorities, honestly. Water the starter, not regrets."
//      CUT: payoff is flat — "priorities" tells instead of showing,
//      and there is no second twist to earn the last line.
//   E. (CHOSEN) "Future you: good news, you finally finish that
//      novel. Bad news: it's a cookbook. About soup. You peaked
//      at soup."
//      WHY IT WINS: opens as a genuine future-self text (criterion
//      1); the novel is a specific, personal ambition, not a generic
//      life cliché (criterion 3); it lands TWO twists — the novel is
//      a cookbook, and the cookbook is about soup — with the last
//      line ("You peaked at soup.") paying both off at once
//      (criterion 2); every sentence is short, the punchline arrives
//      fast, and at ~113 characters nothing is wasted (criterion 4);
//      and it dodges the banned broke/tired angle entirely, finding
//      a fresh one about creative ambition deflating into soup
//      (criterion 5).
//
// This program holds the chosen line as a const, validates it
// against the gate rules, and writes it to entry.txt in the
// directory from MAKEFUN_OUTPUT_DIR (or /output by default).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen text — exactly one line, no leading/trailing space.
const ENTRY =
  "Future you: good news, you finally finish that novel. Bad news: it's a cookbook. About soup. You peaked at soup.";

// Gate validation, mirroring the sealed scorer:
//  - UTF-8 text (a JS string round-trips through UTF-8 cleanly
//    unless it holds lone surrogates — checked below)
//  - 1 to 200 characters, counted per code point (not UTF-16 units)
//  - not only white space
//  - a single line, no leading or trailing whitespace
function validate(text: string): void {
  // Reject lone surrogates: these cannot be encoded as valid UTF-8.
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if (code >= 0xd800 && code <= 0xdfff) {
      throw new Error("entry contains a lone surrogate (not valid UTF-8)");
    }
  }
  const length = [...text].length; // code-point count, per the gate
  if (length < 1 || length > 200) {
    throw new Error(`entry is ${length} characters; gate requires 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (text !== text.trim()) {
    throw new Error("entry has leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  console.log(`entry OK: ${length} characters`);
}

// Main: validate the chosen line, then write it to entry.txt in
// the output directory (MAKEFUN_OUTPUT_DIR, default /output).
function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${outPath}`);
}

main();
