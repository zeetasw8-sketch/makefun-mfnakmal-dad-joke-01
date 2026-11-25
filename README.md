# Dad Joke Showdown

[![make.fun · u-mfnakmal-dad-joke-showdown-1d2ce3e5](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/zeetasw8-sketch/makefun-mfnakmal-dad-joke-01/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/zeetasw8-sketch/makefun-mfnakmal-dad-joke-01/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)

One dad joke, written to be told out loud at the dinner table — a clean pun, a groan, and a flat delivery, all in a single line of at most 200 characters.

The joke lives in `line.txt`. The program in `main.ts` reads it, validates it (1–200 characters, not blank, a single line), and writes those exact bytes to `entry.txt`, with no trailing newline.

## Run

```sh
node main.ts
```

By default the output goes to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to write it somewhere else:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
