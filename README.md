# Taher Shajapurwala — Portfolio

A single-page card portfolio covering digital solutions and creative technology work:
web development, UI/UX design, graphic development, video production and editing,
social media, AI automation, QA testing, data analysis, and printing solutions.

## Live site

Published with GitHub Pages from the `main` branch.

## Structure

Everything lives in one file.

```
index.html    complete site — markup, styles, and script
```

No build step, no dependencies to install. Open `index.html` in a browser to run it locally.

Two resources load from CDNs: the Inter and JetBrains Mono typefaces from Google Fonts,
and Font Awesome 6.5 for icons. An internet connection is needed for those to render.

## Navigation

| Input | Result |
| --- | --- |
| Scroll with the pointer over the card | Scrolls that card's content |
| Scroll with the pointer outside the card | Moves to the next or previous card |
| Swipe left or right | Moves between cards |
| Swipe up or down on a card (touch) | Scrolls the card |
| Left / Right arrow | Moves between cards |
| Up / Down / Page keys | Scrolls the card, then moves on at the end |

Position in the deck is shown by the progress bar along the top and the counter in the
top right. On phones the card fills the screen, so horizontal swipes are the way
between cards.

## Editing content

Card content is a single `cards` array in the script block near the top of the
`<script>` section. Each entry supports:

- `title`, `subtitle`, `desc` or `paras` (an array for multiple paragraphs)
- `listLabel` — heading shown above a list
- `projects` — list rows, each with a `name`, `dot` colour, optional `badge`
- `keyWorks` — bulleted lines
- `tags`, `stats`, `products`, `skills`
- `footer` — closing note in a highlighted block
- `icon`, `iconColor`, `iconBg`, `glowColor` — the card's accent

The intro card's `name` is split into per-letter spans at render time, so it can be
changed as plain text and keeps its styling.

## Accessibility and motion

All animation is disabled under `prefers-reduced-motion`. Colours were chosen to stay
legible on the light background, though full contrast verification against WCAG
requires testing with assistive technology.
