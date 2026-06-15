# elipugh.github.io

Personal website. Plain static HTML/CSS/JS — no build step.

- `index.html` — home / bio + links
- `about.html` — about page (placeholder)
- `blog.html` — blog index (lists posts in `posts/`)
- `style.css` — shared styles (light + dark themes via CSS variables)
- `theme.js` — dark-mode toggle (follows system, remembers manual choice)
- `images/` — site-wide images (e.g. headshot)
- `fonts/` — PP Kyoto display font for headings (see `fonts/README.md`)

## Blog posts

Each post is a self-contained folder under `posts/`:

```
posts/
  demo-asr-vibes/
    index.html     # the post (links back with ../../)
    thumb.png      # thumbnail shown on the blog index
    media/         # this post's images / audio / video
```

To add a post:

1. Copy an existing folder under `posts/` to `posts/<your-slug>/`.
2. Edit `index.html` and drop media into `media/`.
3. Add a `<li>` linking to it in `blog.html` (with a `thumb` image).

Shared assets (`style.css`, `theme.js`, fonts) are referenced from posts with
`../../`.

To preview locally, just open `index.html` in a browser.
