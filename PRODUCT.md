# PRODUCT.md — kobci.so (marketing site)

## What this is
The public marketing/landing site for **Kobci**, a Somali-first business-management platform (POS, inventory, customer credit "deyn", invoices, payroll) sold to small Somali businesses. This repo is only the site — the product lives elsewhere. Deployed via GitHub Pages at kobci.so.

## Register
`brand` — design IS the product here. The page must earn trust in a market where software is sold person-to-person, not through ads.

## Audience
Somali shopkeepers, wholesalers, and small producers; owners typically 35–55, phone-first (mid/low-end Android), often on slow connections, mixed literacy, Somali-primary with English toggle. Skeptical of software; deeply fluent in money, stock, and deyn (customer credit). Secondary audience: diaspora relatives who co-run or fund the business and often make the software call.

## The page's single job
Get a business owner to send one email (info@kobci.so) to start a free 30-day trial. No self-serve signup exists; no WhatsApp number yet.

## Voice
Plain, concrete, market-floor Somali; no hype, no anglicised jargon. Money claims are conservative and honest (no fabricated numbers). The no-added-charges commitment is a first-class brand promise, not fine print — AND (owner ruling 2026-08-27) the words "interest/dulsaar/ribo" are TABOO and must never appear in copy; the promise is always framed positively ("the price is fixed", "nothing is ever added").

## Brand system (committed — honor it)
- **Mark:** K-arrow (brand/mark.svg, currentColor, hand-authored 32×32; chosen over 12 audited concepts — see brand/RATIONALE.md). Wordmark "Kobci" with the "ci" in accent.
- **Color:** teal accent — light `#0d7a6b` / dark `#3ec9b0`; ink `#12211f`; the palette may deepen/extend around the teal but the teal IS Kobci.
- **Tone of decoration:** "plain, established" — the rationale explicitly rejects startup-playful. Decoration must come from the trade itself (ledgers, receipts, stock, the arrow of the K) not from SaaS idioms.
- **Both themes** already supported (prefers-color-scheme + data-theme).

## Hard constraints
- Static single-file HTML per page (GitHub Pages, no build step). Bilingual via the data-so/data-en + JS toggle system — every visible string has both.
- Lightweight: slow-connection audience; no heavy images/video; inline SVG over rasters; at most one webfont with system fallback.
- Accessibility: AAA-minded contrast, 44px tap targets, reduced-motion honored.
- Content laws: prices/tiers only as panel-finalized ($9.99/$14.99/$24.99; annual SEALED by owner 2026-08-28: 1 month free, figures $109/$164/$274 — 11x monthly rounded down in the customer's favor); trial copy must never promise self-serve/instant; no testimonials or traction numbers until real; email is the only contact; "not a tax system" stays; the fixed-price/nothing-added promise stays (interest vocabulary itself is banned, see Voice); every feature claim must map to a shipped capability (2026-08-27 audit removed a false "expiry tracking" claim).
