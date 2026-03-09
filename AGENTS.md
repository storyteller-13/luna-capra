# AGENTS guide

This repository is configured for OpenAI Codex-style agents.

## Goals
- Keep the site static and fast.
- Preserve the tone and typography of the poetry pages.
- Prefer minimal, readable changes.

## Workflow expectations
1. Run `npm run lint` for code-style checks.
2. Run `npm run build` to validate Astro output.
3. For any front-end UI change, attach a screenshot artifact.

## Security expectations
- Do not commit secrets, tokens, or private keys.
- Favor dependency pinning and automated security updates.
- Keep HTTP response headers hardened (CSP, HSTS, X-Frame-Options, etc.).
