# Grace Hopper 2026 Portfolio Redesign

## Goal
Rebuild Alissa Ann Josy’s portfolio as a polished, recruiter-friendly editorial site while preserving her identity and photo. The preview will be updated only; nothing will be published or deployed.

## What will change
- Replace the Regency/floral presentation with warm ivory, charcoal, and one muted accent.
- Use an editorial serif for display text and a clean sans serif for body copy.
- Build a compact navigation for Work, Experience, About, and Contact; include Resume only if a real resume file exists.
- Rewrite the opening section around: “Software engineer building reliable backend and AI systems,” USF graduation in May 2027, and direct Work, Email, GitHub, and LinkedIn actions.
- Present Distributed Key-Value Store, CollabPad, and LLM-Powered Financial Data Analyzer as fully readable featured project cards with verified metrics and repository links only where confirmed.
- Move other verified work into a restrained secondary list and remove stale or unsupported claims.
- Feature Publix Technology, RARE Lab, and Undergraduate Studies with the exact supplied dates and outcomes.
- Condense About, education, skills, and contact details for fast recruiter scanning.
- Remove modal-only details, hover-dependent text, phone emphasis, floral/wax-seal assets, decorative prose, and constant animations.

## Technical details
- Keep the existing React/Vite static architecture and reusable UI components.
- Use semantic color tokens in the global stylesheet and responsive, mobile-first layouts.
- Add visible focus states, semantic links, accessible headings, keyboard-safe navigation, and reduced-motion handling.
- Update page metadata to match the new positioning.
- Verify repository links, production build status, desktop/mobile rendering, and that all essential text is visible without hover.
