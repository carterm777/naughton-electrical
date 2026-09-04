# Naughton Electrical — demo site

A single-page redesign concept for **Naughton Electrical**, a Red Seal-certified
residential, commercial and light industrial electrical contractor in Devon,
Alberta. The business already has a live site at <http://devonelectrician.ca/>;
services, credentials, hours and service area were taken from it, but all page
copy here is freshly written.

**This is an unsolicited demo.** It was not commissioned by the business.
`<meta name="robots" content="noindex, nofollow">` is set in `index.html`,
`X-Robots-Tag: noindex, nofollow` is set for every route in `vercel.json`, and
`public/robots.txt` disallows everything.

## Stack

Vite 6 + React 18, `lucide-react` for icons, Fraunces + IBM Plex Sans from Google
Fonts. No CSS framework, no runtime CSS-in-JS, no backend.

```
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # serve the built output
```

## Structure

```
src/
  data/site.js            all page copy, nav, services, reviews, FAQ
  lib/motion.jsx          scroll/entrance primitives (provided)
  styles/
    tokens.css            the whole token system — the ONLY file with raw colors
    base.css              reset, a11y floor, motion variants (provided)
    app.css               layout scaffolding + shared patterns
  components/             one .jsx + one .css per section
DESIGN-LOG.md             the three-phase selection log for every section
```

Every color, type step, space step, radius, shadow and texture on the page
resolves through a custom property defined in `src/styles/tokens.css`. No
component stylesheet contains a raw color value.

## The signature element

The photo-diagnosis widget in the hero is the page's centerpiece: a tactile paper
form with a genuinely torn edge (a real `feTurbulence` + `feDisplacementMap`
filter applied to a background paper layer, so the type on top stays crisp),
drag-and-drop with a live hover state, a real local preview via
`URL.createObjectURL` (revoked on unmount and on replace), file-type and size
validation with real error copy, a labelled progress beat, and a confirmation
that presents the attached photo as a matted print laid in a tray.

It is **client-side only — nothing is transmitted anywhere.** The page says so
under the form. Wire it to a real endpoint before launch.

## Placeholder content — replace before launch

- **The five Google reviews and the 4.9 / 47-review aggregate are fabricated.**
  They are stand-ins for the real Google Business Profile content and are labelled
  as placeholders on the page and in a code comment in
  `src/components/GoogleReviews.jsx`. Swap in verified GBP reviews and the real
  rating before this goes live.
- **The email address `contact@naughtonelectrical.com` is a placeholder.** No
  email is listed on the source site.
- **No social profiles are linked.** No verifiable Facebook or Instagram account
  was found for this business, so none was invented. The footer's icon row points
  at real, working channels instead — phone, SMS, email, and the business's own
  current site.

Everything else — the phone number, the address, the hours, the Red Seal
endorsement, the ECAA / WCB / BBB / Chamber affiliations, the service list and
the service area — comes from the business's own live site.

## Notes

- No embedded map. The coverage section is a hand-built typographic town index
  plus a grained address card and a photographic band.
- Photography is from the shared `_assets/optimized/` set; only the fifteen
  images the page actually renders were copied into `public/images/`.
- Responsive at 390 / 768 / 1024 / 1440 / 1920 with no horizontal overflow at any
  width; keyboard-operable throughout (nav dropdowns open on focus and close on
  Escape, the FAQ is real buttons with `aria-expanded` / `aria-controls`);
  `prefers-reduced-motion` is respected by every animation on the page.
