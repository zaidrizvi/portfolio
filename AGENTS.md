# AGENTS.md

Existing animated developer portfolio. Improve incrementally, never rewrite from scratch.
For new pages or sections, build them fully and match the existing style. Keep edits to existing sections small.

## Stack
- Vite + React.js + Tailwind + Framer Motion. or any motion you have to use for good animation 
- Portfolio content, project details, experience, education and all external links live in src/data/resume.js. Generic UI text and aria labels may stay in components.

## Commands
- Dev (for me, don't run it yourself): npm run dev
- Verify: npm run build (run before declaring done)
- Lint: npm run lint (only if configured)
- Fix errors you caused. Never claim a check passed without running it.

## Design reference
- Structure inspiration: https://cs-student-portfolio.sitesplaced.com/
- Take only the clean resume-style flow (About, Experience, Education, Skills, Projects, Contact).
- Ignore its dummy content (Alex Johnson, Acme Tech, hackathons) and its visual style.
- Do not copy layout, code, copy or assets. Our palette, fonts and animations from this file always win.

## Animation
- Framer Motion only. 200-600ms, ease-out, animate transform and opacity.
- Allowed: staggered hero reveal, scroll entrances (play once), hover states, timeline reveal, project-card interaction, existing cursor glow.
- No scroll-jacking, bounce/spin, or other infinite loops.
- Respect prefers-reduced-motion. Keep mobile light, no layout shift.

## Content
- Never invent experience, achievements, metrics, dates, results, testimonials or links.
- Missing info: add a TODO in resume.js and tell me.
- Hackathons/achievements only if real data exists. Use real screenshots when available.
- Case-study order: Problem, Architecture, Key decisions, Results, Demo.

## Quality
- Reuse existing components and naming conventions. Only touch files relevant to the task.
- Semantic HTML, visible focus states, keyboard accessible, alt text, readable contrast.
- Mobile-first, no horizontal overflow, check 375px and 1280px when preview tools exist.

## Reporting
- List files changed, what you actually tested, and what you couldn't verify. 