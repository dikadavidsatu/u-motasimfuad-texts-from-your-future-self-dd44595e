# Texts From Your Future Self

[![make.fun](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e)
[![rank](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/dikadavidsatu/u-motasimfuad-texts-from-your-future-self-dd44595e/rank.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e/leaderboard)
[![reward](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/dikadavidsatu/u-motasimfuad-texts-from-your-future-self-dd44595e/reward.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e)

Entry for the make.fun competition **u-motasimfuad-texts-from-your-future-self-dd44595e** — "Texts From Your Future Self".

The program writes one funny text message from your future self (a single line, under 200 characters) to `entry.txt`. The chosen line:

> Future you: good news, you finally finish that novel. Bad news: it's a cookbook. About soup. You peaked at soup.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Requires Node.js 22+. `main.ts` validates the line against the competition gate (1–200 characters counted per code point, single line, not only whitespace, no leading/trailing whitespace, valid UTF-8) before writing it.

## License

MIT — see [LICENSE](LICENSE).
