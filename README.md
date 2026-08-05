# BOOTS — Live Music Duo Website

## BOOTS Website v2.7.5.1 — Thank-You Wording Refinement

- Changed “Thank you for the Liquid Applause!” to “Thanks for the Liquid Applause!”.
- Changed “Tap for your thank-you yodel!” to “Tap the Lederhosen for your thank-you yodel!”.
- Preserved the approved `/thank-you/` layout, styling, Lederhosen image, vibration animation, yodel audio, accessibility, reduced-motion behaviour, `BACK TO BOOTS` button and responsive implementation.
- No other website pages, Stripe routes, tracking, assets or production behaviour were changed.

## BOOTS Website v2.7.5 — Liquid Applause Thank-You Experience

- Added a new BOOTS-branded page at `/thank-you/`.
- Added the approved message: “Thank you for the Liquid Applause!”, “You’ve made Mike and Jason smile.” and the gold “PROST!” sign-off.
- Reused the approved Yodelling Lederhosen image, vibration graphics and authentic yodel recording without changing any production assets.
- Added a deliberate, keyboard-accessible “Tap for your thank-you yodel!” interaction with no autoplay and no overlapping audio.
- Added a BOOTS-styled `BACK TO BOOTS` button and retained the privacy-page route.
- Preserved the existing homepage, Tip Jar link, Stripe route, privacy-conscious tracking, responsive behaviour and accessibility implementation unchanged.
- Added `STRIPE-THANK-YOU-INTEGRATION-NOTES.md` for the separate post-deployment Stripe redirect stage.


## BOOTS Website v2.7.4 — Restore LOOK / TIP JAR Divider

- Restored the missing thin vertical gold divider between the LOOK panel and the combined TIP JAR · TRINKGELD / Yodelling Lederhosen panel in the wide multi-column layout.
- Matched the existing LISTEN / LOOK divider in colour, thickness, opacity, height and alignment.
- Kept the divider out of wrapped and stacked tablet/mobile layouts.
- Preserved all approved Yodelling Lederhosen sizing, positioning, audio, animation, accessibility, Tip Jar behaviour, tracking, wording and responsive layout.
- Made no unrelated production changes.


## BOOTS Website v2.7.3 — Yodelling Lederhosen Further Positioning Refinements

**Feature branch only:** `feature/yodelling-lederhosen`. Do not deploy or merge into `main` until Mike and Jason approve the preview.

- Raised the lower gold divider on desktop by reducing excess lower spacing in the combined LISTEN / LOOK / TIP JAR · TRINKGELD / Lederhosen area.
- Shifted the complete lower Tip Jar and Lederhosen content grouping 24px left in the narrow two-column desktop/tablet layout, without changing the approved trousers size or assets.
- Extended the click-triggered trousers vibration and vibration-mark animation from 0.48 seconds to 0.68 seconds, with the active state retained for 0.70 seconds.
- Raised the lower divider on narrow portrait mobile layouts by reducing the Lederhosen panel minimum height and lower padding, approximately halving the gap beneath the yodel caption.
- Preserved all approved wording, imagery, audio, idle sway, payment destination, privacy-conscious tracking, keyboard accessibility and reduced-motion behaviour.

**Feature branch only:** `feature/yodelling-lederhosen`. Do not deploy or merge into `main` until Mike and Jason approve the preview.

- Froze the approved v2.7.1-yodel-test.5 Lederhosen and vibration-graphic sizes globally across all viewports.
- Preserved the approved iPhone trousers position.
- Moved only the trousers and vibration group 20px left on tablet and desktop layouts so the trousers centreline aligns above the capital “L” in “Lederhosen”, while leaving the desktop caption in its existing position.
- Removed the curved gold arrow element completely on all devices and removed its reserved caption spacing.
- Centred “Tap the Lederhosen for a yodel!” on iPhone and equivalent narrow portrait layouts.
- Preserved the approved production image, Liquid Applause copy, PROST! sign-off, audio, idle sway, vibration animation, keyboard accessibility and reduced-motion behaviour.

## Version 2.7.1-yodel-test.5 — Global Lederhosen Size and Liquid Applause Copy Refinement

**Feature branch only:** `feature/yodelling-lederhosen`. Do not deploy or merge into `main` until Mike and Jason approve the preview.

- Removed breakpoint-dependent Lederhosen sizing and made the 50%-reduced v2.7.1-yodel-test.3 rendered size the global default across desktop, tablet and mobile views.
- Applied the proportionally reduced vibration-graphic size globally so no media query restores the earlier larger scale.
- Retained responsive positioning and spacing rules while preventing them from changing the trousers or vibration scale.
- Updated the Liquid Applause invitation to: “If we've made you smile, you're welcome to buy Boots a beer.”
- Added a separate centred gold “PROST!” sign-off beneath the invitation with a small gap.
- Preserved the approved transparent image asset, exact aspect ratio, caption, arrow, animation timing, audio, accessibility, reduced-motion support and Liquid Applause behaviour.

## Version 2.7.1-yodel-test.4 — Narrow-View Lederhosen Size and Position Refinement

**Feature branch only:** `feature/yodelling-lederhosen`. Do not deploy or merge into `main` until Mike and Jason approve the preview.

- Reduced the rendered Yodelling Lederhosen to 50% of its v2.7.1-yodel-test.3 size in the narrow two-column layout only.
- Reduced the separate vibration graphics proportionally.
- Moved the complete interactive feature slightly upward and to the left at that breakpoint for better alignment with the LOOK and LIQUID APPLAUSE controls.
- Kept the approved transparent production PNG, caption size and wording, audio, animation timing, accessibility, reduced-motion support and Liquid Applause behaviour unchanged.
- Preserved the existing wide-desktop and single-column mobile layouts.

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

## BOOTS Website v2.7.2 — Yodelling Lederhosen production-sync update

- Preserved the existing `feature/yodelling-lederhosen` implementation.
- Updated the BOOTS YouTube channel link to `https://www.youtube.com/@bootsmusic`.
- Changed the visible heading to `TIP JAR · TRINKGELD`.
- Changed the supporting line to `Leave BOOTS a little Liquid Applause.`
- Preserved the existing Stripe destination, aggregate click-counting route, yodel audio, animation, interaction, accessibility behaviour and responsive layout.

## BOOTS Website v2.7.2 — Yodelling Lederhosen Final Positioning Refinement

- Reduced the empty space beneath the Lederhosen caption so the gold divider sits higher.
- Applied a modest spacing reduction on desktop and tablet.
- Applied a stronger spacing reduction on mobile portrait.
- On desktop only, moved the caption slightly left without moving or resizing the Lederhosen.
- Preserved the approved trousers size, position, animation, audio, interaction, accessibility behaviour, Tip Jar wording, YouTube handle, Stripe route, click counter, site content and privacy behaviour.
