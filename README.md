# BOOTS — Live Music Duo Website

## Version 2.6.7 — Minimal Privacy Release

- Cloudflare Pages is the sole production host; GitHub remains the source repository.
- Removed all embedded Spotify players and retained ordinary external listening links.
- Replaced automatic YouTube thumbnail requests with first-party branded video cards linking to YouTube.
- Localised all 13 gallery images previously loaded from Wix.
- Removed Google Fonts requests and used system-font fallbacks.
- Removed the unused legacy `consent.js` file and all consent-storage claims.
- Retained Liquid Applause as a deliberate first-party redirect to Stripe with aggregate daily click counting only.
- Replaced the public privacy page with concise English-first/German-second factual wording.
- Preserved the v2.6.3 mobile hero framing, v2.6.5 Liquid Applause click analytics, and v2.6.6 favicon branding.

No build step is required. Push the repository `main` branch with GitHub Desktop; Cloudflare Pages deploys automatically.

## Privacy architecture

Before deliberate visitor interaction, the page loads only first-party site files plus Cloudflare hosting/security infrastructure. Spotify, YouTube and Stripe are contacted only after the visitor follows an external link. The website code sets no non-essential cookies or browser storage. Cloudflare Web Analytics must remain disabled.

## Files

- `index.html` — website
- `privacy.html` — bilingual Privacy & Cookies / Datenschutz notice
- `functions/liquid-applause/go.js` — aggregate click counter and Stripe redirect
- `images/duo-portrait.png` — hero/about image
- `images/gallery/` — 13 local gallery images
- favicon and Apple touch icon files

- Corrected the v2.6.7 preview so all four YouTube cards display locally stored first-party thumbnail images.
