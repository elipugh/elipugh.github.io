# Fonts

The headings use **PP Kyoto** (Pangram Pangram), free for personal use.

1. Download the free font: https://pangrampangram.com/products/kyoto
   (add to cart at $0, then download the zip)
2. Put the font file(s) here in this folder.
3. The CSS expects `PPKyoto-Medium.woff2`/`.otf` — used for titles only
   (your name + page headings). Body text uses Nunito (loaded from Google Fonts).
   - If your file has a different name, either rename it to match, or
     update the `@font-face` `src` path in `../style.css`.
   - `.woff2` is ideal for the web. If you only have `.otf`, that works too.

Until the file is added, headings fall back to Georgia.
