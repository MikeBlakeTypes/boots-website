# BOOTS Yodelling Lederhosen Production Assets

Version: 1.0 (for BOOTS Website v2.7.0-yodel-test.1)

## Locked production rule

`yodelling-lederhosen-original.jpg` is the definitive source photograph. The source canvas is 1140 × 2047 pixels (width × height), an aspect ratio of 1140:2047. Never stretch, squash, redraw or regenerate it. Scale with width or height set to `auto` so the ratio is preserved.

## Files

- `yodelling-lederhosen-original.jpg` — untouched archival source.
- `yodelling-lederhosen-cutout.png` — full-resolution transparent-background production cut-out on the original 1140 × 2047 canvas.
- `yodelling-lederhosen-cutout-web.png` — smaller web-ready transparent PNG, same proportions.
- `vibration-left.svg` and `vibration-right.svg` — independently positioned BOOTS-gold motion marks.
- `arrow.svg` — independently positioned BOOTS-gold curved arrow.
- `caption.svg` — reference caption artwork with the exact wording “Tap the Lederhosen for a yodel!”
- `yodelling-trousers.wav` — supplied processed master audio, unchanged.
- `yodelling-trousers.mp3` and `.ogg` — browser-friendly derivatives.

## Colour

BOOTS gold: `#C3A25C`.

## Website implementation

The live feature uses separate DOM elements rather than a flattened composite. The caption is editable HTML text for accessibility and responsive layout. The PNG, vibration SVGs and arrow SVG can therefore be moved and resized independently without altering the photograph.
