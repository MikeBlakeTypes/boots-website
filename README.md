# BOOTS — Live Music Duo · Website

## Version 2.4 — Post Launch Update

- Replaced the upcoming-release placeholder with the released single **Stick Season**.
- Added current Spotify, Apple Music track and single, Amazon Music, YouTube Music and Deezer links.
- Added a clear invitation above the Stick Season streaming links.
- Changed Liquid Applause from an external donation link to a non-functional **Coming Soon** preview.
- Refined the booking enquiry email subject and message for a concise, professional introduction.
- Retained the existing Facebook, Instagram and YouTube links; no TikTok link is included.

One-page band website for **BOOTS** (Mike & Jason, British live-music duo, ~200 gigs/year across Europe). Redesign of the old Wix site at bootsmusic.net. Primary goal: **booking enquiries** from event planners, hotels, wedding couples and venues.

This folder is the complete, deploy-ready static site. No build step, no framework, no dependencies.

```
handoff/
├── index.html              # the entire site (HTML + CSS + vanilla JS in one file)
├── images/
│   └── duo-portrait.png    # hero + about photo (1448×1086)
└── README.md               # this file
```

## Design system (keep this consistent)

- **Colors:** near-black `#0A0A0A` (alt band `#0E0C08`), antique gold `#C3A25C`, warm off-white `#F2EEE4`. No other hues. All defined as CSS custom properties in `:root`.
- **Type:** Oswald (display caps, wide letterspacing) + EB Garamond (body serif), loaded from Google Fonts. Max two webfonts — do not add more.
- **Photography strictly black & white** — every photo gets `filter: grayscale(1)`.
- **Details:** 1px gold hairlines, thin gold line icons (inline SVG, stroke `#C3A25C`, ~1.4 width), gold-outline pill buttons. Hover = translucent gold fill `rgba(195,162,92,0.18)` + brighter border — never solid gold behind gold text.
- Tone of copy: rock'n'roll but premium ("classic rock poster meets luxury hotel bar"). No invented stats or testimonials.

## Deploy to Cloudflare Pages (free)

**Option A — drag & drop (fastest):**
1. Create a free Cloudflare account → Workers & Pages → Create → Pages → "Upload assets".
2. Upload the contents of this folder (`index.html` at the root).
3. Done — you get `something.pages.dev` with SSL.

**Option B — via GitHub (required for the CMS below):**
1. Create a free GitHub account + a repo (e.g. `boots-website`); push this folder's contents to it.
2. Cloudflare → Workers & Pages → Create → Pages → "Connect to Git" → pick the repo.
3. Build settings: **no build command**, output directory `/`. Every push auto-deploys.

**Custom domain:** Pages project → Custom domains → add `bootsmusic.net` (easiest if the domain's DNS is moved to Cloudflare, also free). Keep the old Wix site up until this is live.

## CMS so the band can edit content themselves (free)

Recommended: **Sveltia CMS** (or Decap CMS — same config format). Git-based: edits are commits, Cloudflare redeploys automatically (~1 min). Requires Option B above.

Steps for the implementing coder:
1. Add `admin/index.html` loading Sveltia CMS from its CDN, and `admin/config.yml`.
2. Auth: GitHub backend. On Cloudflare Pages you need an OAuth bridge — deploy the small open-source `sveltia-cms-auth` Cloudflare Worker (free) and register a GitHub OAuth app. Both band members need free GitHub accounts with repo access.
3. **Restructure content out of `index.html`** so the CMS has clean fields to edit. Suggested collections (map 1:1 to the current sections):
   - `intro` — statement text
   - `about` — two paragraphs, photo
   - `videos` — list of { title, youtube_id } (renders the WATCH grid)
   - `releases` — list of { type: album/single/coming-soon, title, spotify_album_id, platform links }
   - `gallery` — list of images with alt text
   - `contact` — headline, lead line, enquiry email
   - `settings` — social links, footer line, donation link
   Either render at deploy time with a tiny build script (e.g. Eleventy) or keep `index.html` static and hydrate from a `content.json` the CMS edits. Keep it as simple as possible — the band edits text, video IDs, and photos; nothing else.

## Open TODOs (marked with `TODO` comments in index.html)

1. **Liquid Applause** — currently presented as a non-functional “Coming Soon” tile. Connect it only when the planned tipping system is ready.
2. **Gallery images are hotlinked from Wix** (`static.wixstatic.com`). Download them into `images/gallery/` and update the `src`s **before the old Wix site is cancelled**, or they will vanish.
3. **Enquiry form** currently opens the visitor's mail app (`mailto:bootsmusic@live.com`). Recommended upgrade: a free form service (Web3Forms or Formspree) so it submits directly from the page — replace the submit handler with their endpoint POST.
4. **German version** — the EN/DE toggle is design-only. The old site has full German copy at bootsmusic.net (`/home-c18e7`, `/ueber-uns`) to translate from. Simplest approach: `de/index.html` duplicate; better: content file per language.
5. **Video titles** — matched to YouTube IDs by their order on the old site's video page; confirm each label matches its video. A fifth untitled video exists on the old site (`mQoOYD5HG9Y`) if wanted.
6. **Spotify artist link** — the footer Spotify icon points at the album page; swap for the artist profile URL if the band has one.
7. **Instagram feed** (optional) — the band wants latest posts from `@bootsmusicofficial` on the site. Instagram has no free official embed for this; use a widget service (Behold, LightWidget, SnapWidget) — connect the account, get the embed snippet, style it to match (B&W thumbnails, gold hairline borders) and place it under GALLERY.
8. **Favicon + og:image** — add a favicon (gold BOOTS mark on black) and a proper share image.
9. **Image optimization** — `duo-portrait.png` is ~2 MB; convert to WebP/AVIF (~200 KB) for faster mobile loads.

## Facts (do not invent beyond these)

- BOOTS are Mike Blake and Jason Howell; performing together since 1997 (three decades), all over Europe; over 6,000 performances; ~200 concerts a year.
- Nokia Snowboard World Cup tour fixture for 7 years; played the Salzburg Winter Olympic bid broadcast; Nürnberg Stadium (DEL Winter Game, 50,000 people, 2013).
- Releases: album "It's Not Television" (2020), single "Rich Girl" (2021), new release upcoming.
- Side projects: Jason Howell — solo album "Take Your Time" (jason-howell.com); Mike Blake — The Marveltonez (themarveltonez.com).
- Socials: facebook.com/BootsMusic · instagram.com/bootsmusicofficial · YouTube channel `UCyU7fS8-ZiGld316BT_id0g`.
- Booking email: bootsmusic@live.com. No public phone number.
