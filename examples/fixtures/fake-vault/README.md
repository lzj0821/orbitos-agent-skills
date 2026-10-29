# Fake Vault Fixture

A tiny, fully fake Obsidian-style vault for testing the `saodust` health check without touching a real private vault. Copy this folder anywhere and point saodust at the copy.

## Planted problems (what a correct health check should find)

| Location | Planted problem | Expected finding |
|---|---|---|
| `Inbox/` (2 notes) | Captures that were never filed | Inbox backlog |
| `Projects/Website Redesign/` | Project marked active but long untouched; its kickoff notes record a "postpone" decision nobody acted on | Stale active project |
| `Projects/Website Redesign/Website Redesign.md` | Links to `[[Design Brief]]`, which does not exist | Dead wikilink |
| `Notes/Reading Notes - Chapter 3.md` | No links in, no links out | Orphan note |
| `Notes/Weekly Review.md` + `Archive/Weekly Review.md` | Same title in two folders | Duplicate titles |
| `Resources/Old Conference Talk.md` | Saved long ago, never referenced | Cold resource |
| `Home.md` | Healthy index note linking to the project | Should **not** be flagged as an orphan |

## Notes

- All people, projects, and content are invented.
- Findings about staleness depend on file modification times, which start counting from when you copy the fixture — the structural findings (orphans, dead links, duplicates, inbox) work immediately.
