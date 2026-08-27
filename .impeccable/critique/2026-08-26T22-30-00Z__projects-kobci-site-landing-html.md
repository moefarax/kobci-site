---
target: kobci.so landing page
total_score: 33
p0_count: 0
p1_count: 0
timestamp: 2026-08-26T22-30-00Z
slug: projects-kobci-site-landing-html
---
# Critique — kobci.so landing (post-redesign, 2026-08-27)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | lang toggle + accordion feedback instant; mailto hands off to OS |
| 2 | Match System / Real World | 4 | deyn/daftar/EVC vocabulary; receipt+ledger artifacts ARE the user's world |
| 3 | User Control and Freedom | 3 | toggle persisted, anchors, no traps; single-page low demands |
| 4 | Consistency and Standards | 4 | one token system, one accent grammar, bilingual everywhere |
| 5 | Error Prevention | 3 | no forms to err in; copy honest about manual provisioning |
| 6 | Recognition Rather Than Recall | 4 | everything visible + labeled; no icon-only nav |
| 7 | Flexibility and Efficiency | 3 | skip link, keyboard-native controls; nothing more needed |
| 8 | Aesthetic and Minimalist Design | 3 | strong hierarchy; feature SVGs slightly dense |
| 9 | Error Recovery | 3 | n/a-lean surface; nothing to break |
| 10 | Help and Documentation | 3 | FAQ = contextual objection handling; support hours in footer |
| **Total** | | **33/40** | **Good** |

## Anti-patterns verdict
LLM: no card-grid sameness, no gradient text, no eyebrow scaffolding, numbers only on the real sequence; artifacts give it a specific world. Passes the slop test.
Detector: 1 warning — em-dash cadence (Somali copy uses dashes legitimately; price-line dashes swapped to middle dots; residual ACCEPTED as voice).
Browser overlay: skipped (file:// static page; screenshots used instead).

## Fixed during this critique cycle
- [P1] Page was blank without JS (bilingual nodes empty until script ran) -> Somali pre-rendered, JS only swaps languages.
- [P1] Reveal animation gated content visibility (blank in headless/hidden tabs) -> keyframe entrance over an always-visible default.
- [P2] Deyn card overlapped receipt total -> collage retuned. [P2] amber-ink illegible on dark -> dark token added. [P2] lang buttons 38px -> 44px.

## Persona red flags (residual)
- Jordan (first-timer): mailto CTA needs a configured mail app; plain-text address shown twice as fallback. Residual: acceptable at pilot; revisit with a copy-to-clipboard affordance when WhatsApp lands.
- Casey (mobile): one webfont + zero raster images = fast on 3G; receipt hidden <480px keeps hero tight. No residual.
- Riley (stress): no-JS, reduced-motion, dark, 390px all verified by screenshot. Somali strings are new copy -> registered for the native-review pass.

## Minor observations
- Feature-artifact SVGs embed Somali-only microcopy (authentic product imagery; aria-hidden, real copy bilingual alongside).
- Em-dash density in Somali register: monitor at native review.
