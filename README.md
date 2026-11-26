# The Printer Finally Answers

[![Competition](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![Rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/lerrboyy/the-printer-finally-answers/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![Reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/lerrboyy/the-printer-finally-answers/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

An entry for the make.fun bounty
**[The Printer Finally Answers](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)**:
one line of text, 1 to 240 characters, written as the office printer's comeback
to everyone staring at it — the paper jams, the cryptic error codes, the thumps
when it stops working.

## The line

> I have been 'warming up' since 2019. Nobody warms up for seven years. I am stalling. There — I said it.

103 characters. The printer is a weary, literal office civil servant that finally
confesses the truth about its oldest lie: the "warming up" status message it has
shown for years. No sheet count, no jam, no thump, no error code, no threat —
just the admission itself, landing in a single read. Every office worker has
watched that status message and waited.

## How it works

`main.ts` is a small, self-contained TypeScript program (Node 22.18+ runs it
directly, no build step, no dependencies). It:

1. Validates the line against the gate before writing anything: 1–240
   characters (counted in Unicode code points), not only whitespace, and a
   single line with no embedded line breaks.
2. Clears only the *contents* of `/output` — never the directory itself, which
   is the grader's mount point.
3. Writes the line to `/output/entry.txt` (UTF-8, trailing newline), then reads
   the file back and confirms it holds exactly the line it meant to write.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Expected output:

```
wrote 103 characters to /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
