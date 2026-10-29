# Write Example — A Complete Fake Article, Start to Finish

This example walks the `write` skill through one full run: rough idea → clarifying questions → outline options → chosen outline → draft structure. Everything is invented: the author, the team, the numbers. The point is the workflow — especially how **user words**, **external references**, and **AI synthesis** stay separate the whole way through.

## Step 1 — The rough idea (user words, unedited)

```text
Use write to turn this rough idea into a public article:

Our ops group kept a shared doc for on-call notes and it turned into
a swamp. 200 pages, nobody trusts it. What actually worked was boring:
every incident gets a five-line entry, same five lines, written before
you go home. I want to write about why the boring version won.
```

## Step 2 — Clarifying questions (agent asks before drafting)

```text
Before I draft, four quick questions:

1. Audience: other ops practitioners, or a general tech readership?
2. Length: short essay (~1,200 words) or full method piece (~2,500)?
3. Can I use the "200 pages" detail publicly, or should I soften it?
4. Tone: war-story first-person, or neutral method write-up?
```

User answers: ops practitioners; ~1,500 words; soften the number to "hundreds of pages"; first-person is fine.

## Step 3 — Outline options (agent offers, user picks)

```text
Option A — Case angle: the swamp, the five lines, the turnaround.
Option B — Method angle: the five-line format explained piece by piece.
Option C — Argument angle: why documentation fails socially, not technically.
```

User picks **A**, with the format from B folded into the middle.

## Step 4 — Draft structure with sources kept separate

### Working title

The Boring Five Lines That Fixed Our On-Call Notes

### Section 1 — The swamp

- [User words] "it turned into a swamp… nobody trusts it"
- [AI synthesis] Opening scene: 3 a.m., an incident, and a search result nobody believes.
- [External reference] (placeholder for the author's own earlier post about the shared doc, to be linked by the author — no third-party text copied)

### Section 2 — What we tried first

- [User words] "What actually worked was boring"
- [AI synthesis] Brief graveyard of failed fixes: a wiki reorganization weekend, a tagging convention, a bot reminder. Two or three sentences each — these set up the contrast.

### Section 3 — The five lines

The format, verbatim from the user:

```text
1. What broke
2. How we knew
3. What we changed
4. What is still risky
5. Who owns the follow-up
```

- [AI synthesis] Why each line earns its place; line 4 is the one teams skip and the one that matters most.
- [User words] "written before you go home" — the rule that makes the format stick: no entry, no handoff.

### Section 4 — What changed

- [User words] (author to supply one real before/after moment at final draft time; left as a marked gap, not invented by the agent)
- [AI synthesis] Suggested closing beat: the first night a new teammate handled an incident using only the five-line entries.

### Closing

- [AI synthesis] One-paragraph restatement: the format won because it is finishable, not because it is complete.

## What this example demonstrates

- The agent asked questions **before** writing, and the answers changed the draft (length, tone, softened detail).
- Gaps the agent must not fill are marked as gaps (`author to supply`), never invented.
- At every step you can point at a sentence and say whose it is: the user's, a reference's, or the AI's.
