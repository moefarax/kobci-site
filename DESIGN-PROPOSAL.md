# Kobci site proposal (2026-09-30): landing polish and pilot page

Branch `claude/kobci-proposal-20260930`, based on origin/main 285c874. Two pages: `index.html` (the landing, polished) and `pilot.html` (new, linked from the landing's nav, the dark "start" section and the contact box). Both are static single-file pages. They use the landing's existing system: the same tokens, Manrope, the K-arrow, the paper slip, and the `data-so`/`data-en` toggle. No library was added (Motion One was not needed), and no image or video was added.

## Motion thesis

This builds on LANDING-MOTION-STUDY.md. Each page has **one object**, and the visitor examines it **on tap**. On the landing that object is the shop's-day slip. On the pilot page it is the pilot sheet. Everything else is feedback on the visitor's own action, or a one-time ledger gesture: a rule being drawn, a row settling, a stamp landing. Nothing loops or auto-advances, and nothing is tied to scroll position. Prices change instantly and never animate. Everything else uses transform and opacity; the only exceptions are one-off colour and shadow fades on single controls. Every duration, delay and curve is a CSS custom property on `:root`; see the timing tokens below.

**Reduced motion, globally:** the existing kill rule (`animation:none; transition:none`) covers every new effect, and every animation runs from an offset to the element's natural resting state. With motion reduced, each state still changes, just instantly: the selected row, the chosen plan, the billing period, the open step and the copied tick. No information is carried only by motion. Every state is also shown as text, colour or border, and exposed through `aria-pressed`, `aria-expanded`, `aria-current` or a live region.

## Landing (index.html): motions and interactions

| # | What it does | Why / principle | Reduced motion |
|---|---|---|---|
| L1 | **The day, examined on tap.** The four slip rows (Subax/Duhur/Casar/Fiid) are now buttons. Tapping one slides a mint ledger "ruler" under that row, redraws its tick, and swaps the slip's note line to what Kobci does at that hour. The note sentences reuse the benefit copy already on the page. Arrow Up/Down moves between rows, and tapping the selected row again clears it. The note area stacks every sentence in one grid cell, so the slip never changes height (no layout shift). | One object examined; trigger on tap, not on scroll (busy.app, scotchpos mechanism). It gives proof in the shopkeeper's words, never with product pixels. | Ruler and note appear instantly. The row is marked by `aria-pressed` and a teal time label, and the note sits in a polite live region. |
| L2 | **Billing thumb.** The Monthly/Yearly control has a teal thumb that slides between the two equal-width halves. The digits still swap instantly. | State change made legible; "a price that animates looks negotiable" (study). | The thumb jumps. `aria-pressed` and the existing sr-only price announcement are unchanged. |
| L3 | **Chosen-plan stamp.** A plan picked with "Dooro …" or in the contact form's plan select gets a 2px teal frame, and a K-arrow stamp lands in its corner. The card and the select stay in sync both ways. | Continuity between pricing and the email draft. The stamp gesture is from the brand vocabulary. | Frame and stamp appear instantly. The select's value and the existing plan-note live region carry the state. |
| L4 | **Section marker in the nav.** On desktop, the link for the section you are reading gets `aria-current="location"`, turns teal, and has an underline drawn from the left. | Wayfinding on a long page. Shows state; not decoration. | The underline appears without drawing. |
| L5 | **Theme icon morph.** The theme button shows a sun in light mode and a moon in dark mode, and the two cross-rotate when you switch. Before, it was always a moon. | Feedback on the control's own state. | Instant swap. `aria-pressed` is unchanged. |
| L6 | **Copy tick.** After a successful copy, both copy buttons ("Koobi fariinta oo dhan", "Koobi emailka") draw a tick in place of the copy glyph for 2.4 s. The status text is unchanged. | Acknowledges the action where the finger is (study: "copy K-tick"). | The tick appears instantly, and the status text still says it worked. |
| L7 | **FAQ answer settle.** An opened answer rises 6px and fades in, next to the existing "+" rotation. | Opt-in depth (shelf.nu); the disclosure shows cause and effect. | The answer simply appears. |
| L8 | **Ledger rule.** The top rule of the benefits list draws once, left to right, when the list first enters view (only if it was below the fold at load). | Rule-draws-itself gesture from the ledger vocabulary. It runs once, and the observer disconnects. | The rule is static. |
| (kept) | Slip print on first view, row settles, press feedback, the letter's empty-field nudge, arrival pulse on the contact box, mobile sticky CTA, 140 ms language dip. | Already reviewed on 2026-09-27; left untouched. | Unchanged. |

## Pilot page (pilot.html): sections and motions

Structure: hero with the **pilot sheet** → **What you get / What we ask** (two-column ledger) → **the path** from one email to 31 December (5 steps) → **Honestly: it's a pilot** (accounts, backups, change, money) → FAQ (4) → **request builder** with a live letter preview → footer. The mobile sticky "Codso tijaabo" and all landing controls carry over: language, theme, menu, skip link, no-JS email fallback.

| # | What it does | Why / principle | Reduced motion |
|---|---|---|---|
| P1 | **Pilot sheet (focal moment).** A paper sheet like the landing slip "prints" once, the first time it is in view. An Oct–Nov–Dec calendar bar then draws from today to 31 December, with a "Maanta" marker, and a live day count ("Maanta ilaa 31 Diseembar: 92 maalmood") is computed from the visitor's clock. The count hides itself after the date passes. Four ledger lines follow (Price $0, Card not needed, 14 days' notice, Your data is yours), and the K stamp lands. The sequence runs once and takes under 1.5 s. | One object examined. The day count is honest urgency: a real date, not invented scarcity. | The sheet is fully drawn at rest. The day count is still shown as text. |
| P2 | **Lines examined on tap.** This is the same ruler interaction as L1. Each line opens its one-sentence term (no charge until 31 Dec; nothing charged automatically; either side can end with 14 days' written notice; export at any time). | Consistent vocabulary across pages; trigger on tap. | Instant; `aria-pressed` and a live region. |
| P3 | **Two-sided ledger.** "What you get" and "What we ask" are two columns separated by a double gutter rule, like the two sides of a ledger. The gutter draws top to bottom once, and the columns settle. | Plain, established; decoration from the trade. The pilot is an exchange, so it is shown as both sides of one page. | Static rule and columns. |
| P4 | **The path, stepped on tap.** Five steps sit on a rail. Tapping a step (or pressing Arrow Up/Down) opens its detail, and the rail fills in light mint up to that step's numeral. Earlier numerals brighten to show they are done. Step 5 shows both price rows and links back to the landing's pricing. Without JS, all five details are visible. | The numbered one-story spine (kloudmate) plus trigger-on-tap. The rail shows position in the sequence, so the numbers carry meaning. | The rail fill and detail appear instantly. `aria-expanded` is on each step button. |
| P5 | **Request builder with a live letter.** The name and locations fields plus four "start with" chips (the landing's own plan terms) write into a visible paper letter above the form as you type. Each changed line settles into place, and a selected chip draws its tick. The same text feeds the mailto links and the "copy whole message" fallback. | Study B2: "the blank the visitor fills IS the conversion". It makes the page's one job tangible. | The letter updates instantly. Chip state is shown by `aria-pressed`, a border and a background, and the tick is also drawn statically. |
| P6 | **Section marker, theme morph, copy tick, FAQ settle, sticky CTA, arrival pulse.** | Same as L4–L7 and the landing's kept behaviour. | Same. |

## Before → after

1. Hero note "30 maalmood bilaash marka la bilaabo" → "Tijaabadu waa bilaash ilaa 31 Diseembar 2026. Kaadh lama rabo." The same change was made in the pricing fine print, start step 3, the contact paragraph and the meta/og descriptions. This resolves PROMISE-GAP row 20: the only way to start today is the pilot, and pilot shops are free until 2026-12-31.
2. The hero slip was a static `role="img"` → now an interactive group of four row buttons with a live note (L1). Its total and footer text are now readable by assistive tech instead of `aria-hidden`.
3. Nav gains a "Tijaabada / The pilot" link, and the start section and contact box gain "Sida tijaabadu u shaqayso / How the pilot works" links to `pilot.html`.
4. Billing toggle: the background swapped instantly → a sliding thumb on equal halves (L2).
5. Plan cards: no selection state → a chosen frame and stamp, synced with the contact form (L3). The 285c874 button alignment (`.plan>ul{flex:1 1 auto}`) is untouched and verified in the screenshots.
6. Theme button: always a moon → sun or moon by state (L5). Copy buttons: text status only → an in-button tick (L6). FAQ answers: pop open → settle (L7). Nav: no location state → `aria-current` marker (L4).
7. Cleanup: a stray `style=""` on the skip link and three empty `class=""` on SVGs removed. The ordered list's default markers are suppressed now that rows are buttons.
8. New `pilot.html`, built from the landing's CSS system verbatim plus about 5 KB of pilot components.
9. PRODUCT.md now records that payroll is not advertised and that the pilot is free until 2026-12-31, replacing the 30-day copy.

## Claims: what the pilot page says and why it is true today

The page takes every term from PILOT-AGREEMENT-DRAFT v0.3 and PROMISE-GAP-AUDIT-2026-09-30:

- Free until 2026-12-31, no card, no automatic charge; the plans after the pilot are at the ruled prices ($9/$14/$24 or $90/$140/$240).
- Either side can end the pilot with 14 days' written notice.
- An owner or admin can export the business data (audit row 15). The page says "business data", never "all data".
- Two-factor codes (audit row 3) are stated as the code enforces them: required for owners and admins, and something you *can* require for all staff.
- Backups (audit row 13) are stated exactly: nightly, each kept 7 days, a whole-system restore, and recent entries may need re-entering.
- "Features may change, brief outages can happen, no uptime guarantee yet" and "Kobci does not move money" come from agreement §5.
- The page shows no payroll, no hosting vendor or location, no WhatsApp (the contact channel is still a blank in the agreement), no deletion-within-30-days promise (row 2: no tenant-delete path), no 12-month read-only promise (row 14) and no in-app report link (row 4).
- "Pilot access is not open yet" is kept, matching the live landing.

## Somali review

Every Somali string written for this proposal carries `data-review="so"` in the markup, for the Gemini Somali review seat. There are 9 occurrences on the landing (6 unique strings) and 73 on the pilot page. The pilot script also has 3 runtime strings (the days-left sentence, "Waxaan rabaa inaan ku bilaabo:", and the page title). The head meta and og descriptions on both pages are also new. The reviewer should confirm these first: the month abbreviations (Okt/Nof/Dis), "31 Diseembar 2026", the term for a two-factor code ("koodh labaad … app xaqiijin"), "dammaanad waqtiga shaqada" (uptime guarantee), and "heshiis" (arrangement). No new product vocabulary was coined where the page already had a term; the chips reuse the plan-card terms.

## Revision r2 (owner feedback: "check the button animations; overall too fast")

### Timing tokens

All motion on both pages reads these tokens; no transition or animation declaration contains a literal duration any more. Reduced motion is still instant, through the global `animation:none; transition:none` rule.

| Token | Value | Where it is used |
|---|---|---|
| `--dur-press` | 100ms | Only the press-down half of a press: `.button:active`, the sticky CTA, icon/language/billing/copy buttons, chips, `.text-action`/nav link press opacity. Release uses `--dur-fast`. |
| `--dur-fast` | 200ms | Micro-feedback: button and control background and colour, hover arrow release, press release, chip border/fill, theme icon opacity, copy glyph fade, note fade-out, plan-stamp fade-out, step-title colour, language dip. |
| `--dur-base` | 360ms | State changes: slip/sheet ruler, note fade-in, tick redraw, billing thumb and its label colour, plan frame and stamp fade-in, nav underline, theme icon rotation, copy tick draw, FAQ "+" rotation, path rail fill, sticky CTA show/hide, letter-line settle, mail status. |
| `--dur-slow` | 700ms | Entrances and reveals: slip/sheet print, slip rows, total text, stamp landing (slip and chosen plan), list settles, FAQ answer and path step reveal, plan-note underline, copy-button nudge. |
| `--dur-draw` | 1000ms | Lines drawn once: slip double rule, pilot calendar bar, benefits ledger rule, pilot ledger gutter, contact-box arrival pulse. |
| `--stagger` | 80ms | Row, tick and list staggers; note fade-in delay; copy tick delay; ledger gutter delay. |
| `--seq-print` / `--seq-rows` / `--seq-ticks` / `--seq-total` / `--seq-stamp` | 100 / 500 / 1000 / 1500 / 2300 ms | Start points of the one-time slip (and pilot sheet) entrance. The whole sequence now ends at about 3.0 s; it was 1.8 s. |
| `--ease-out` (= `--ease`) | `cubic-bezier(.2,.7,.2,1)` | Arrivals, feedback, reveals. |
| `--ease-in-out` | `cubic-bezier(.45,0,.25,1)` | Movement between two resting states: ruler, billing thumb, rail fill, sticky hide, drawn lines, language dip, tick undraw. |

Two load guards were added:

- `html.preload` is set in `<head>` and removed two frames after the script initialises. It blocks all transitions while the page sets its first state (theme icon, billing thumb, chosen plan, language), so nothing animates on load.
- The FAQ entry that is open by default and the pilot's first path step no longer play their reveal on load.

### Buttons and controls: before -> after

Captured frame by frame with Playwright. Each control has a screenshot every 50 ms plus a per-rAF computed-style log, saved to `proposal-shots/frames-before/` and `frames-after/`; each folder also holds `samples-*.json` and `trace-desktop.zip`/`trace-mobile.zip`. `before` is commit 18c6427, and `after` is this revision.

| Control | Before | After |
|---|---|---|
| Primary buttons (hero, contact, sticky) hover | Lifted 2px in 160ms. It also applied on touch, so a tapped button stayed lifted. | Lifts 1px in 200ms, and only on devices that can hover. |
| Primary/quiet buttons press | From the hover lift (-2px) to +1px and scale .985 in 60ms, a 3px jolt. The 60ms also applied to background and colour. On release everything snapped back in 120ms. | +1px and scale .98. Transform goes down in 100ms, and background and colour keep 200ms. Release eases back in 200ms. No bounce. |
| Button arrow | Nudged 3px on hover *and* while pressed. On touch it stayed nudged after a tap (measured: translateX 3px left on a tapped "Dooro"). | Nudges only on hover-capable devices, eases 360ms in and out. |
| "Dooro" quiet buttons | Hover wash stuck on touch after a tap (measured rgb(240,247,243) after tap). | Hover gated; a tap leaves the button at rest. |
| Chosen-plan frame and stamp | The 2px frame appeared instantly while the stamp animated for 340ms, so the two moved out of step. The stamp fell from scale 1.45. On un-choose the stamp snapped away in 160ms and the frame vanished instantly. | The frame fades in 360ms. The stamp lands from a gentler rotate(-20deg) scale(1.2) over 700ms, and leaves in 200/360ms. |
| Monthly/Yearly thumb | Thumb moved in 280ms but the label colour changed in 200ms, so for a moment the white label sat on the pale track. | Thumb and label colour share 360ms `--ease-in-out`; press 100ms down, 200ms up. |
| Theme toggle | Icon cross-rotate 360ms with a 200ms fade. The hover background stuck on touch (measured). | Same morph, on tokens. Hover gated; the preload guard stops a dark-mode visitor seeing it animate on load. |
| Copy tick (both copy buttons) | Tick drew in 300ms. When the "done" state cleared after 2.4s, the tick snapped away in one frame. | Tick draws in 360ms after an 80ms stagger. The revert undraws in 200ms while the copy glyph fades back in. |
| FAQ toggles | "+" rotated in 160ms. The answer settled in 300ms, including the default-open answer on page load. | "+" rotates in 360ms. The answer settles in 700ms and does not play on load. |
| Icon, language, billing and copy buttons press | Scaled to .95 in 100ms and came back in 100ms (abrupt). | Down in 100ms, back in 200ms. |
| Text links and nav links press | Dropped to .7 opacity with no transition (a flicker). | Fade to .7 in 100ms and back in 200ms. Hover colour is gated. |
| Slip rows / pilot sheet lines | Ruler 320ms. The note cross-faded 200/220ms. Hover underline stuck on touch. | Ruler 360ms ease-in-out, note out 200ms and in 360ms after 80ms, tick redraw 360ms. Hover gated. |
| Pilot step buttons | Title colour snapped while the numeral faded (200ms). Rail fill 460ms. Detail reveal 320ms, also on load for step 1. Hover colour stuck on touch. | Title and numeral fade together (200ms), rail fills in 360ms ease-in-out, detail reveals in 700ms (not on load). Hover gated. |
| Pilot chips | Press scale .97 held, then snapped back in 100ms. Tick undrew in 120ms. Hover wash stuck on touch. | Press down in 100ms and release in 200ms. The tick draws in 360ms and undraws in 200ms. Hover gated. |
| Mobile sticky button | Show 300ms / hide 260ms. No press feedback, because its own transform overrode `:active`. | Show and hide at 360ms (hide uses ease-in-out), plus a proper press (+1px, scale .98, 100ms down). |
| Arrival pulse (contact box) | 900ms. | 1000ms (`--dur-draw`). It still fires once per click, guarded by scrollend or a 900ms timeout. |
| Language toggle | 140ms dip. A second tap during the dip queued a second swap (double-fire). | 200ms dip; taps are ignored while a swap is pending. |
| Nav location underline | 280ms. | 360ms. |

## Verification

Playwright (Chromium) at 360, 800 and 1280 in Somali and English, plus reduced-motion runs at 360 and 1280. Section screenshots, interaction-state shots and no-JS shots are in `proposal-shots/`, which is gitignored at about 6 MB; `report.json` holds per-run results. Page weight, measured from the served response bodies: see the commit report.
