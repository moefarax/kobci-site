---
target: kobci.so landing page
total_score: 35
p0_count: 0
p1_count: 0
timestamp: 2026-08-27T04-10-00Z
slug: projects-kobci-site-landing-html
---
# Critique — kobci.so landing (CTA spacing + copy-email pass, 2026-08-27)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | copy-email now gives instant visible feedback ("La koobiyay ✓"); lang toggle instant |
| 2 | Match System / Real World | 4 | deyn/daftar/EVC vocabulary; receipt+ledger artifacts ARE the user's world |
| 3 | User Control and Freedom | 3 | toggle persisted, anchors, no traps; single-page low demands |
| 4 | Consistency and Standards | 4 | one token system, one accent grammar, bilingual everywhere; CTA row now one idiom |
| 5 | Error Prevention | 3 | mailto dead-end for no-mail-app users now has a copy path; still OS-dependent |
| 6 | Recognition Rather Than Recall | 4 | everything visible + labeled; no icon-only nav |
| 7 | Flexibility and Efficiency | 4 | two paths to the address (mailto + clipboard); skip link, keyboard-native |
| 8 | Aesthetic and Minimalist Design | 3 | strong hierarchy; feature SVGs slightly dense |
| 9 | Error Recovery | 3 | n/a-lean surface; nothing to break |
| 10 | Help and Documentation | 3 | FAQ = contextual objection handling; support hours in footer |
| **Total** | | **35/40** | **Good+** |

## Fixed this cycle (from 33/40 snapshot + owner report)
- [Owner report] Hero CTA stack misaligned: ghost button carried a wrap-indent (`margin-inline-start`) and sat 4px taller than the primary (border box mismatch); gap to microcopy tight. -> `.cta-row` flex container (gap 12/14px, wrap), both buttons on an equal `border:2px` box, ghost margin struck, note at 18px top margin + 34em cap. English fits side-by-side; Somali's sealed 30-day label (442px) + ghost (150px) genuinely exceed the 544px column, so Somali stacks edge-aligned by design — verified both locales + 390px by screenshot.
- [Jordan persona residual, named in prior snapshot] mailto-only address -> "Koobi / Copy" clipboard affordance beside both plain-address fallbacks (step 1 + close-band). Progressive: hidden without JS/Clipboard API (`.js-copy` gate), bilingual via the `.t` system, dataset-swap feedback survives mid-feedback language toggles, `aria-live=polite`, 44px targets, currentColor borders work on light card + dark band (screenshot-verified incl. dark theme).

## Residuals (unchanged)
- Feature SVGs slightly dense (H8); em-dash cadence accepted as voice; Somali strings registered for native review. Copy-to-clipboard was the last named persona residual — none open.
