# PRD — Aditya, Out Loud

## Original Problem Statement
Build a new interactive personal portfolio called "Aditya, Out Loud" for Aditya Raut's Wispr Flow growth internship application. Help a recruiter understand who Aditya is, explore projects, and see how he uses voice to bring ideas to life. Warm cream background, dark readable text, orange accents, generous spacing, subtle animations. Mobile + desktop, no login. Six sections: hero intro ("Aditya, Out Loud." + "Explore my work" / "How I built this" buttons), three expandable project cards (problem, contribution, key decision, learning, evidence links), a "Hear it. See it." section (spoken instruction recording + resulting feature + revisions + transcript, never autoplay), a growth experiment section (question, action, actual feedback, change), an interactive $3,000 workspace (click item → purpose + estimated cost), and a contact section (LinkedIn, joining availability, Bangalore travel). Clearly labelled placeholders for unsupplied details. Do not invent achievements, results, testimonials, recordings, prices, or availability. Accessible buttons, keyboard navigation, reduced-motion support. Avoid unnecessary backend services.

## User Choices (confirmed)
- Hero visual: voice-themed soundwave illustration (generated, orange/ink on cream)
- Workspace: pre-filled typical voice-first items with "[cost TBD]" placeholders
- Navigation: slim sticky top nav with section links, easy on mobile

## Architecture
- Frontend-only React (CRA + craco) served on :3000; no backend services used (per brief)
- Tailwind theme: cream #F6EFE3 / paper #FBF6EC / ink #201812 / ember #E8500A
- Type: Fraunces (display), Instrument Sans (body), JetBrains Mono (labels/placeholders)
- Motion: lenis smooth scroll, framer-motion reveals, CSS waveform + marquee; prefers-reduced-motion disables all
- Custom SVG logo mark + favicon; every interactive element carries data-testid

## Personas
- Recruiter/hiring manager at Wispr Flow reviewing the growth internship application
- Aditya, replacing [bracketed] placeholders before submitting

## Core Requirements — status
1. Hero with headline + anchor buttons — DONE (v19: compact availability line added under the intro: "Seeking a growth internship · Available after 20 November 2026 · Willing to relocate to Bangalore")
2. Three expandable project cards — DONE (v19, recruiter-scannable: summary + GitHub/demo links visible on every card without expanding (ApplyReady: GitHub + Live demo; FixLens & CareCue: GitHub only — all four URLs verified HTTP 200); "Read project story" expandable holds Problem / My contribution / Key decision / What I learned with Aditya's factual text preserved; keyboard-toggleable with aria-expanded)
3. "How I used voice" section — DONE (v20: heading + description + video with playback/fullscreen controls only; the transcript dropdown box removed at Aditya's request — the verbatim transcript is preserved below for reuse; recording kept at /app/frontend/public/build-recording.mp4)
   PRESERVED TRANSCRIPT (verbatim whisper-1 of the recording's audio, for reuse): Context: "In this recording, I repeat an editing instruction. 'Hear it. See it.' was the section's name at the time; it is now called 'How I used voice.'" — Take 1: "In the "Hear it. See it." section, change step 3 review to what I checked, replace it placeholder with I clicked copy email and confirm that email copied message appeared." — Take 2: "In the "Hear it" section, change step 3 review to what I checked, replace it placeholder with I clicked copy email and confirm that email copied message appeared." (Second repetition transcribed as "Hear it" without "See it" — unconfirmed against speech.)
4. Growth section — DONE (v16: "My idea for introducing students to Wispr Flow" with "Proposed — not yet tested" badge; four blocks: Start with one useful task / How I would try it / What I would look for / What I would do next — Aditya's text verbatim; honesty note "I have not recruited participants or collected results yet."; compact 2x2 grid; no results claimed)
5. Interactive $3,000 workspace, click-to-reveal — DONE (v11: "Inspected" counter renamed "Items explored n/8"; all spending limits, totals and card interaction unchanged)
6. Contact with LinkedIn / availability / Bangalore rows — DONE (v10: real LinkedIn link opening in a new tab, "Write to me" opens mailto:adityaraut080@gmail.com, availability "Available after 20 November 2026.", Bangalore "Willing to relocate to Bangalore."; accessible "Copy email" button with keyboard support, execCommand fallback, visible "Email copied."/"Copy failed" states and sr-only announcements; footer bracket-placeholder sentence removed)
7. Placeholders clearly labelled, nothing invented — DONE (v1)
8. A11y: keyboard nav, aria-expanded/controls, focus rings, reduced motion — DONE (v1)

## Backlog (P0/P1/P2)
- P0: Run the five-student growth pilot and document what actually happened (keep "Not yet run" until then)
- P1: Fresh "What I checked" screenshot for the See frame (current frame predates the rename); final proofread before submitting
- P2: Subtle page-load sound toggle, dark "print" variant, analytics-free simplicity preserved
