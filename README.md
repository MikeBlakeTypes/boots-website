# BOOTS — Live Music Duo Website

## Version 2.7.1-yodel-test.3 — Yodelling Lederhosen Production Asset Replacement

**Feature branch only:** `feature/yodelling-lederhosen`. Do not deploy or merge into `main` until Mike and Jason approve the preview.

- Replaced the existing Yodelling Lederhosen cut-out with the newly supplied transparent production PNG.
- Regenerated the web-optimised PNG directly from the new master while preserving its transparency, proportions and appearance.
- Kept all approved v2.7.1-yodel-test.2 positioning, sizing, spacing, caption, vibration graphics, arrow, animation timing, audio behaviour, accessibility and responsive layout unchanged.

## Version 2.7.1-yodel-test.2 — Yodelling Lederhosen Layout Refinement

**Feature branch only:** `feature/yodelling-lederhosen`. Do not deploy or merge into `main` until Mike and Jason approve the preview.

- Reduced the displayed Lederhosen cut-out and vibration marks by approximately 30% while preserving the source image's exact aspect ratio.
- Moved the interactive Lederhosen upward so the top of the cut-out aligns with the top of the Liquid Applause beer mug icon on wide layouts.
- Removed the internal gold divider so Liquid Applause and the Lederhosen read as one combined panel.
- Improved responsive sizing and minimum column widths so the Liquid Applause button does not collide with panel dividers on narrower desktop windows.
- Increased the subtle idle sway frequency from every 15 seconds to every 7.5 seconds.
- Preserved the caption wording, type treatment, colour and size, and retained all click/tap, audio, vibration, keyboard and reduced-motion behaviour.

## Version 2.7.0-yodel-test.1 — Experimental Yodelling Lederhosen Feature

**Feature branch only:** `feature/yodelling-lederhosen`. Do not deploy or merge into `main` until Mike and Jason approve the preview.

- Added the original-proportion BOOTS Yodelling Lederhosen beside Liquid Applause as an independent tap/click interaction.
- Added deliberate-user-action audio playback using the supplied processed recording; no autoplay and no overlapping audio.
- Added a short vibration animation and a subtle idle sway every 15 seconds.
- Added keyboard access, an accessible control label and `prefers-reduced-motion` support.
- Kept Liquid Applause behaviour and aggregate click counting unchanged.
- Added reusable, independently positioned PNG/SVG/audio assets under `assets/yodelling-lederhosen/`.

## Version 2.6.9 — Release and Side-Project Click Analytics

- Added privacy-conscious aggregate daily click counting for every Stick Season listening-platform link: Spotify, Apple Music, Amazon Music, YouTube Music, YouTube and Deezer.
- Added aggregate daily click counting for the Marveltonez and Jason Howell side-project buttons.
- Reused the existing `boots-analytics` D1 database, `outbound_clicks` table and `BOOTS_ANALYTICS` production binding.
- Added one allow-listed first-party Pages Function at `functions/track/[[path]].js`; unknown tracking routes return 404.
- Preserved fail-safe redirects and excluded HEAD requests from counts.
- Updated the bilingual privacy notice to describe the expanded but still non-identifying aggregate measurement.
- Retained the existing Liquid Applause counter unchanged.

## Version 2.6.8 — Listen Artwork Update

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


## v2.6.7 screenshot thumbnail correction

This package replaces the temporary BOOTS-branded YouTube placeholder thumbnails with four genuine local screenshots supplied by the user:

- peaceful-easy-feeling.jpg
- wish-you-were-here.jpg
- i-wanna-be-like-you.jpg
- live-at-nurnberg-stadium.jpg

All four thumbnails remain first-party local assets under `images/video-thumbnails/`. No YouTube embed is restored; clicking still takes the visitor out deliberately to YouTube.

- Refined the local YouTube cards so titles sit in a lower black strip and the BOOTS gold-circle/black-triangle play treatment is restored.


## Version 2.6.8 changes

- Replaced the three text-only Listen placeholders with square, first-party local artwork panels.
- Added the supplied square artwork for Stick Season, Rich Girl and It's Not Television.
- Changed the explanatory line beneath each release to: “Listen in full on your favourite platforms”.
- Preserved external-link-only listening, the v2.6.7 privacy architecture, YouTube thumbnail treatment, Liquid Applause click counting, favicon branding and Cloudflare Pages hosting.
