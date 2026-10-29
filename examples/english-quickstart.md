# English Quickstart Examples

This repository is Chinese-first, but the skills can be reviewed, tested, and adapted by English-speaking contributors. Each example below is a complete, realistic run with **fake data only** — fake people, fake projects, generic paths.

## Saodust — vault health check

**Situation**: a small test vault at `~/vault-test` with 42 notes. Some notes are orphans, one project folder has not been touched in months, and a few wikilinks point at notes that were renamed.

**Prompt**:

```text
Use the saodust skill to run a dry-run health check on ~/vault-test.
Report a score, findings grouped by category, and the top three cleanup
actions. Do not move, rename, or delete anything.
```

**What the agent does**:

1. Scans note metadata (titles, links, modification dates) without editing files.
2. Groups findings: inbox backlog, orphan notes, dead wikilinks, stale projects, cold resources.
3. Scores the vault and ranks cleanup actions by value.

**Sample output (abridged)**:

```text
Vault health score: 71/100

Findings
- Inbox backlog: 6 notes in Inbox/ older than 14 days
- Orphan notes: 4 notes with no inbound or outbound links
  (e.g. "Reading Notes - Chapter 3", "Random Idea - Voice UI")
- Dead wikilinks: 3 links pointing at renamed notes
- Stale projects: "Website Redesign" untouched for 96 days

Top 3 cleanup actions
1. Process the 6 inbox notes (file, merge, or delete).
2. Link or archive the 4 orphan notes.
3. Decide on "Website Redesign": revive it or move it to Archive/.
```

## Write — from rough idea to structured draft

**Situation**: you have one rough sentence and want a structured Chinese article without losing track of which words are yours.

**Prompt**:

```text
Use the write skill to turn this rough idea into a Chinese article
outline: "Our support team answers the same twelve questions every
week; the fix was a decision log, not a bigger FAQ." Keep my original
words separate from your synthesis.
```

**What the agent does**:

1. Asks clarifying questions (audience, length, tone) before writing anything.
2. Offers outline options — method angle, case angle, trend angle.
3. Drafts with three clearly separated layers: your original words, external references, and AI synthesis.

**Sample output (abridged)**:

```text
[User words] "the fix was a decision log, not a bigger FAQ"

[Outline — case angle]
1. The week the same question arrived 31 times
2. Why the FAQ kept growing and helping less
3. The decision log: one entry per question, with the reasoning
4. What changed after four weeks

[AI synthesis] Opening hook suggestion: start with the 31-times
question as a scene, then reveal the log as the turning point.
```

A full end-to-end article example lives in `examples/write-example.md`.

## Four Platform Daily Content — one idea, four platforms

**Situation**: one source idea, four channels to feed today.

**Prompt**:

```text
Use the four-platform-daily-content skill to adapt this idea into
WeChat, Xiaohongshu, X, and Douyin drafts: "Keep one source of truth
for every recurring task; summaries drift, sources do not."
```

**What the agent does**:

1. Fixes the source idea as the single source of truth.
2. Adapts — not resizes — the idea per platform: structure, length, and reader expectation differ.
3. Labels each version so nothing gets cross-posted by accident.

**Sample output (abridged)**:

```text
Source idea: Keep one source of truth for every recurring task;
summaries drift, sources do not.

[WeChat] Long-form: opens with a drifted-summary anecdote, then the
principle, then a three-step practice.
[Xiaohongshu] Checklist style: "3 signs your notes have drifted"
with a save-worthy summary card structure.
[X] Single sharp post: the principle in one line plus a one-line
proof.
[Douyin] 40-second script outline: hook line, one example, closing
principle — written for speaking, not reading.
```

## Privacy reminder

Every example in this repository uses invented people, projects, and data. When you adapt these prompts for real work, keep private vault paths, customer data, and third-party content out of anything you plan to share.
