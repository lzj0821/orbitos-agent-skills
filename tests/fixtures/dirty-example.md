# Dirty Fixture — MUST FAIL the privacy scan

This file is a self-test for `scripts/validate.mjs`. Every line below is
fake, and every line MUST be flagged. If the scan ever passes this file,
the privacy check is broken.

- Windows path: C:\Users\realperson\Documents\vault\secret-note.md
- Unix path: /home/realperson/vault/secret-note.md
- API key shape: sk-abcdefghijklmnopqrstuvwxyz0123456789
- Token assignment: access_token = "abcd1234efgh5678"
- Email: someone@realmail-provider.com
- Phone: 13800138000
