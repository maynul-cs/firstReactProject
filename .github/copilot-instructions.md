## Purpose

This file gives concise, actionable guidance for AI coding agents working in this repository so they can be productive immediately. Focus on discoverable, repository-specific patterns rather than generic best-practices.

## Quick Start (developer workflows)

- **Run dev server:** `npm run dev` (uses Vite; HMR enabled; default port 5173)
- **Build for production:** `npm run build` (produces `dist/`)
- **Preview built site:** `npm run preview` (serves `dist/` locally)
- **Lint JS/JSX:** `npm run lint` (uses the repo `eslint.config.js`)

These scripts are defined in `package.json`.

## Big-picture architecture

- Single-page React app scaffolded with Vite. Key entry files:
  - `index.html` — app host shell.
  - `src/main.jsx` — React entry; uses `createRoot` and `StrictMode`.
  - `src/App.jsx` — primary UI component and HMR example.

- Bundling and dev server: `vite` with `@vitejs/plugin-react` (see `vite.config.js`). No backend code or server in this repository.

## Project-specific patterns and conventions

- React version: project depends on React 19. Code uses `createRoot` from `react-dom/client` in `src/main.jsx`.
- Asset imports:
  - Absolute import for the special Vite-served logo: `/vite.svg` (see `src/App.jsx`).
  - Local assets under `src/assets/` (e.g., `react.svg`) are imported with relative paths.
- CSS: global/app CSS is in `src/index.css` and `src/App.css` — components import their CSS directly.

## ESLint / coding style

- ESLint configuration is in `eslint.config.js`. Notable settings:
  - Rules applied to `**/*.{js,jsx}` files.
  - `no-unused-vars` is configured with `varsIgnorePattern: '^[A-Z_]'` — identifiers starting with an uppercase letter or underscore can be unused without error. Reference: `eslint.config.js`.

## Integration points & external dependencies

- Vite dev server and build (`vite`).
- `@vitejs/plugin-react` for React refresh and JSX transforms (configured in `vite.config.js`).
- No tests, backend services, CI configs, or additional third-party integrations are present in the repository.

## What to change (and what not to assume)

- Safe edits:
  - Update or add components under `src/`.
  - Add routes or pages (this template doesn't include a router by default).

- What to avoid without checking with the maintainer:
  - Changing `type` in `package.json` or altering JS module settings without verifying tooling compatibility.
  - Adding TypeScript without creating a migration plan (this repo is JS-only).

## Examples of useful tasks for an AI agent

- Improve DX: add README snippets that explain `npm run dev` and HMR behavior.
- Add a small component and corresponding CSS under `src/` demonstrating the asset import pattern (`/vite.svg` vs `./assets/*`).
- Add unit tests only after the project introduces a test runner and config — none exist currently.

## Questions for the maintainer

- Do you want TypeScript support or tests added in this repo?
- Any preferred lint rules or formatting tools beyond the existing ESLint setup?

If anything above is unclear or you want me to expand specific sections (examples, code snippets, or CI integration), tell me which parts to iterate on.
