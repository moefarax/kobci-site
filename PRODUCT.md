# Product

<!-- impeccable:product-schema 1 -->

This file covers kobci.so, the public marketing site for **Kobci**. The product itself (AQUA, served to pilot shops at pilot.kobci.so) lives in a separate repository. Updated 2026-09-27 from the earlier record plus owner rulings recorded in the orchestrator; nothing below is inferred without a source.

## Platform

web

## Stack

Static single-file HTML per page, inline CSS and JS, no build step, hosted on GitHub Pages at kobci.so. One self-hosted webfont (Manrope) with system fallback. Owner ruling 2026-08-30: the landing stack is free to choose; MUI is only for the app.

## Users

- **Primary:** Somali shopkeepers, wholesalers and small producers. Owners are typically 35–55, phone-first on mid/low-end Android, often on slow or patchy data, with mixed literacy. Somali is their first language; English is a toggle. They are skeptical of software and deeply fluent in money, stock and deyn (customer credit).
- **Secondary:** diaspora relatives who co-run or fund the business and often make the software decision.
- **How they arrive:** Kobci is sold person to person in a small market, not through ads. A visitor has usually been told about Kobci or shown the page by someone.

## Product Purpose

Kobci is a Somali-first business-management platform for small businesses: sales and receipts (POS), stock, customer credit (deyn), invoices and expenses, customers, staff attendance, leave and payroll, and business reports.

The site has one job: get a business owner to send one email asking to start. Success is a sent email with the business name and number of locations. There is no self-serve signup. Pilot access is not open yet, so the email starts a conversation, and the 30 free days begin once an account is activated.

## Positioning

- Somali from the first step to the last, in the language of the market floor, not translated software.
- Priced per business, not per employee. The price is fixed and nothing is ever added, including for late payment. This follows the owner's binding no-riba principle and is a first-class promise, not fine print.
- Customer credit stays exactly as the shopkeeper wrote it.
- Paid through the local rails the audience already uses: EVC Plus, eDahab, Zaad, or bank transfer. No card is required.
- A business-management tool, explicitly not a tax system.

## Operating Context

- The visitor reads on a phone in a shop, often in daylight, often interrupted, often on a slow connection.
- Email is the only contact channel. There is no WhatsApp number yet. Many target phones have no configured mail app, so the email step needs a fallback that keeps the prepared message.
- The trade's own artefacts are the paper receipt, the ledger or debt book, stock on shelves, and the shop's day from opening to closing.
- Replies to requests come within one business day. Support hours: Saturday–Thursday, 8:00–18:00 EAT.

## Capabilities and Constraints

- **Prices** (owner-updated 2026-09-04): Bilow $9, Dhexe $14, Maamul $24 per month. Yearly is 10x monthly ($90/$140/$240), which is two months free. Any other figure is wrong.
- **Plan contents** as currently published:
  - Bilow: sales and inventory, customer credit, invoices and expenses, low-stock alerts.
  - Dhexe adds customer management, sales tracking and business reports.
  - Maamul adds staff attendance, leave and payroll.
- Every feature claim must map to a shipped capability. The 2026-08-27 audit removed a false "expiry tracking" claim.
- Trial copy must never promise self-serve or instant access.
- **Bilingual:** every visible string exists in Somali and English (the data-so/data-en toggle system).
- **Lightweight:** no heavy images or video; inline SVG over rasters; stay within a 250 KB page budget.
- **Open decisions:**
  - Whether the English call to action says "pilot" or "trial". The owner changed it to "pilot" on 2026-09-06; the Somali is "tijaabo".
  - The public launch date for self-serve.

## Brand Commitments

- **Name and mark:** "Kobci", with "ci" in the accent colour, and the K-arrow mark (`brand/mark.svg`, chosen over 12 audited concepts; see `brand/RATIONALE.md`). Keep the mark upright and move it as one piece.
- **Colour:** the teal is Kobci; the palette may deepen or extend around it. Both light and dark themes are supported.
- **Voice:** plain, concrete, market-floor Somali; no hype and no anglicised jargon. Money claims are conservative and honest.
- **Banned words:** "interest", "dulsaar" and "ribo" never appear in copy (owner ruling 2026-08-27). The promise is always framed positively ("the price is fixed", "nothing is ever added").
- **Tone of decoration:** "plain, established". Startup-playful is rejected. Decoration comes from the trade itself: receipts, ledgers, stock, the arrow of the K.
- **Motion** (owner 2026-08-30 and 2026-09-27): the site should have motion that expresses the brand. The 2026-09-27 verdict was that the page lacked motion design and user friendliness.

## Evidence on Hand

- **Real:**
  - the brand assets in `brand/`
  - the published prices and plans
  - the payment rails
  - the one-business-day reply promise
  - the data-export and access-control facts in the trust section
- **Absent, never fabricate:**
  - testimonials, customer names or logos
  - usage or traction numbers
  - savings figures
  - business records presented as real (receipt numbers, named customers, amounts)
- **Confidentiality law** (owner 2026-08-30): no real product screenshots or crops, no module maps of the system, no field names or data-model hints. Stylised trade artefacts are fine.
- **No plaintext email address in source** (owner 2026-08-30, after a spam-harvest incident). The address is assembled in script at load; the no-JS fallback is "info [at] kobci [dot] so".

## Product Principles

1. Honesty over persuasion: every claim, price and promise must survive being checked by a skeptical shopkeeper.
2. The shopkeeper's language and world first: Somali, their artefacts, and their payment rails, never SaaS vocabulary.
3. One job per visit: make sending the first email easy, and never leave the visitor unsure whether it worked.
4. Show the outcome, never the machinery: sell trust and the result, not how the system is built.
5. Light enough for a cheap phone on a slow connection.

## Accessibility & Inclusion

- AAA-minded contrast, 44 px minimum tap targets, visible focus, and the reduced-motion preference honoured with identical content.
- Mixed literacy: short sentences, concrete nouns, and minimum readable type sizes on phones.
- The page must stay usable without JavaScript, with the email address still reachable.
