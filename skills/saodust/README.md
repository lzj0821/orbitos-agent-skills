# Saodust

Saodust is an Obsidian knowledge-base health check skill. It turns "my vault feels messy" into a concrete report.

## What It Checks

- Inbox backlog
- Stale active projects
- Finished projects that should be archived
- Orphan notes
- Cold resources
- Dead wikilinks
- Root-folder hygiene

## Example

```text
/saodust --dry-run
```

Expected result: a report with a score, findings, and top three cleanup actions.

## Using with Codex

Prompt:

```text
Use the saodust skill to run a dry-run health check on this vault. Report a score, the top findings, and the three highest-value cleanup actions. Do not move, rename, or delete anything.
```

Expected output: a health report with a score, findings grouped by category (inbox backlog, orphans, dead links, stale projects), and the top three cleanup actions — with no files changed.

Privacy note: if your real vault contains private notes, point Codex at a copy or a small fake vault first. When sharing a report, use generic folder names instead of your real vault paths.

## Privacy

Saodust is read-first. It should not move or delete files unless the user explicitly asks for a follow-up cleanup.
