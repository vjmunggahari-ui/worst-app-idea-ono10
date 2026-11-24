# The Worst App Idea Ever Pitched

[![Bounty](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/vjmunggahari-ui/worst-app-idea-ono10/rank.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/vjmunggahari-ui/worst-app-idea-ono10/reward.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)

A make.fun entry for **The Worst App Idea Ever Pitched** ($2, top 8 paid).

## The entry

> BatterySaver extends your phone battery to a full week by turning the screen off permanently, so you never have to worry about it dying again.

One sentence, 142 characters. A battery-life app whose solution to dying
batteries is to switch the phone off for good — a product that sounds real,
a founder who sounds certain, and a function nobody on earth needs.

## How it works

`main.ts` (Node, no dependencies) writes exactly that one sentence to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then reads it back and verifies it
byte-for-byte against its sha256 (`1e1f10e3…74fb`), that it is exactly one
sentence, and that it is 142 characters inside the 1–240 gate. It throws if
`MAKEFUN_OUTPUT_DIR` is unset.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
