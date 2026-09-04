# Selection Log — Naughton Electrical (`naughton-electrical`)

Three-phase process per `section-style-repo.md`: layout → visual style → animation,
with an element-inventory pass and a stated motion budget per section, then both
finishing passes. Art direction row: `_kit/ART-DIRECTION.md` §10.

---

## Step 0 — Page inventory

**Visual ambition:** mixed, warm and grounded. Textured-organic dominant,
warm-approachable secondary.

**The page's one aesthetic risk (per §10):** paper grain run at a strength most
builds are too timid for — visible fractal-noise grain on every ground, long
paper fibres on the two largest surfaces, and a genuinely torn (deckled) edge on
the signature widget, produced with a real `feTurbulence` + `feDisplacementMap`
filter rather than a faked jagged border. Kept strictly tonal: the grain only
ever multiplies or overlays, never introduces a hue, so it never fights the copy.

**Rhythm (light / moss / dark cadence down the page):**

| # | Section | Ground | Note |
|---|---|---|---|
| — | Header | parchment + moss subheader | textured hairline divider |
| 1 | Hero | parchment, grain + fibre | photo bleeds off the right edge |
| 2 | Google Reviews | parchment-2 (deeper oat) | first tonal step down |
| 3 | Trust Badges | **deep moss band** | first dark event, early |
| 4 | Why Us | parchment | relief |
| 5 | Services | parchment-2 | paper cards |
| 6 | Coverage | **light moss wash** + full-bleed photo band | second moss note |
| 7 | Our Story | parchment | relief |
| 8 | Final CTA | **bark — the page's one dark band** | warm in hue, dark in value |
| 9 | FAQ | parchment | relief before the close |
| — | Footer | bark, heaviest grain | textured footer background |

**Imagery per section:** hero `panel-upgrade-hero`; reviews `winter-house`;
trust badges none (certificate panels); why us `kitchen-table-quote`,
`permit-tag`, `vans-morning`, `load-calc`; services `panel-new`,
`rewire-rough-in`, `pot-light-install`, `ev-car-charging`, `commercial-lift`,
`burnt-outlet`; coverage `cranston-hero`; story `van-paperwork`; CTA
`outage-night`. Fifteen images, all from `_assets/optimized/`, all with real alt
text; only the hero loads eagerly.

**Page-wide motion budget:** one `WordReveal` (hero H1), one `useCursorGlow`
(Final CTA — the only dark surface), one `useParallax` (hero photo, desktop
only), one `useScrub` (story rule). No ambient drift anywhere: every section
that could carry it already has foreground motion, which is exactly the stacking
Pass 2 exists to catch.

---

## Per-section decisions

### Header / Navigation
- **Layout — Standard Horizontal Nav Bar.** Centred nav with two working
  dropdowns is mandated by the prompt; *Centered Logo Split Nav* loses because
  the link set is seven items plus two multi-column menus and would sit
  unbalanced either side of a wordmark.
- **Visual style — Textured Hairline Nav Divider** (assigned). A grain-flecked
  copper-to-ink rule under the bar rather than a hard 1px border; it is the
  page's first statement that this is a paper surface.
- **Animation — Underline Sweep** (hover, richness file) + nav background/height
  collapse on scroll. Dropdowns open on hover *and* focus, close on Escape and
  on focus leaving the group. Mobile is a horizontal link strip with a real fade
  affordance — no hamburger, per the prompt — retracting to wordmark +
  click-to-call once scrolled.
- **Motion budget:** 2 (bar collapse, per-link underline). Reduced motion: colour
  swap only.

### 1. Hero
- **Layout — Split-Screen Hero** (assigned). Type left, photo bleeding off the
  right viewport edge, signature widget straddling the split line. *Full-Bleed
  Image Hero* was rejected: the mandatory fold list (H1, subhead, 4 badges, 2
  CTAs, widget) is far too much content for a treatment that "demands brevity".
- **Visual style — Organic Texture Overlay** (assigned), plus **Overlapping or
  Bleeding Image** and **Layered Depth Composition** from the richness file. The
  photo is dual-masked — soft left edge, soft foot — so it dissolves into the
  parchment instead of butting against it.
- **Animation — Staggered Load-In** with **Weighted Word Reveal** on the H1
  (once per page), **Depth Settle** on the widget, and a shallow
  **Layered Parallax Drift** (0.06, desktop only) on the photo.
- **Element inventory / sequence:** rule+eyebrow (60ms, fade) → H1 (180ms,
  word reveal @72ms/word) → subhead (760ms, rise-sm) → 4 badges as one stagger
  group (880ms base, 90ms step) → CTA pair + hours as one unit (1260/1440ms) →
  widget on its own track (520ms, settle). Trigger: load, not scroll — the hero
  is above the fold, so a scroll threshold would never fire.
  **Motion budget: 5 groups.** Reduced motion: all collapse to final state.
- **Mandatory rules:** the rule, the eyebrow and the widget's top edge share one
  alignment line (row-gap deliberately kept short, and `column-gap` used in the
  desktop block so the shorthand can't reset it). H1 carries **no ch-based
  max-width** — the column governs the wrap, so it lands on 3 lines at 1440 and
  at 390.

### 2. Google Reviews
- **Layout — Testimonial Card Grid** (assigned).
- **Visual style — Photo and Card Testimonial Block** (assigned) — **deviated,
  logged.** That entry's *Avoid when* is "no customer photos are available or
  permitted", which is exactly the case here, and inventing a customer face is
  forbidden. The photo/card pairing is therefore carried at **block** level: one
  environmental Alberta photo (`winter-house`) anchors the aggregate panel, which
  then sits *inside* the grid as its first cell rather than floating above it.
- **Composition:** 3 columns × 3 rows. Aggregate panel holds column 1 across two
  rows as a tall photographic block; four quotes fill the 2×2 beside it; the
  fifth — the one commercial review — runs full width as a wider, larger-set
  closing card. Every cell is filled, so no quote card gets stretched into a
  half-empty box to match a taller neighbour.
- **Animation — Staggered Rise** (scroll, 95ms step) + **Magnetic Lift** on
  hover; the aggregate photo takes a slow scale on hover.
- **Element sequence:** eyebrow → H2 (clip reveal) → aggregate → four quotes →
  wide quote → placeholder note. **Budget: 6 groups** (one per card, which the
  richness file's own guidance allows for a card grid).
- Reviews are labelled on-page as placeholder content, and in a code comment.

### 3. Trust Badges
- **Layout — Certification Badge Wall** (assigned). Four real credentials, so the
  entry's "fewer than four badges reads sparse" caveat doesn't bite.
- **Visual style — Textured Certificate-Style Panel** (assigned). Parchment
  panels on the deep moss band, each with a copper hairline held inside a paper
  margin — a certificate double-rule built from inset shadows. Premium note
  honoured: identical seal size, stroke weight and optical baseline across all
  four, so the row reads as one system.
- **Animation — Badge Fade and Scale-In on Scroll**, 110ms step, badges as one
  group. **Budget: 2** (head, badge row). Hover: panel lift + the copper rule
  brightening.
- Icons: `badge-check`, `users`, `hard-hat`, `landmark` — four distinct,
  meaning-matched Lucide glyphs, none shared.

### 4. Why Us — **the differentiator**
- **Layout — Mission/Story-Led Value Prop** (assigned) — **adapted, logged.** The
  fixed copy contains no mission paragraph for this section and none may be
  invented, so the mission voice is carried by a sticky narrative rail (large
  Fraunces H2 + the real hours) rather than a manufactured lead sentence, with
  the four reasons running as a story-ordered list. *Icon + Blurb Grid* was
  rejected on purpose: a four-up icon grid is the exact generic default the
  build brief names.
- **Visual style — Photographic Icon Replacement** (assigned) — the one device
  no other site in the set is using. Four small matted photo crops stand in for
  icons: identical 4:5 window, identical paper mat, identical copper hairline in
  the bottom margin, only the tilt varying (±1.1–1.7°) so the set reads
  hand-placed rather than mismatched. Also draws on **Tilted or Rotated Photo
  Card** and **Framed or Bordered Photo Insert**.
- **Animation — Sequential Reveal on Scroll**, 130ms step, each row (crop +
  title + body) moving as one unit — not three. Hover: the crop rotates to true
  and lifts, which is the interaction that sells the crops as physical prints.
  **Budget: 5.**

### 5. Services
- **Layout — Service Card Grid** (assigned). Six services of similar scope; the
  entry's "4–8 discrete services" shape fits exactly.
- **Visual style — Textured Paper Card** (assigned), with a **wide** photo band
  bleeding to each card's top edge. Deliberately a different photographic system
  from Why Us's small matted crops so the two sections stay distinguishable — the
  coherence sweep's job.
- **Animation — Staggered Grid Fade-In on Scroll** (100ms step) + **Image Zoom
  on Hover** and **Magnetic Lift**. **Budget: 6** (headline group + rows).
- Cards are non-interactive `<li>` articles, not links — there are no service
  pages, and a card wrapped in `href="#"` would be dead UI.

### 6. Coverage
- **Layout — Neighborhood or Landmark Mention Block** (assigned). No invented
  landmarks: the prompt's own framing sentence (acreages, newer builds) is the
  local specificity.
- **Visual style — Textured Background Address Card** (assigned) + **Image as
  Section Divider** from the richness file — a full-bleed `cranston-hero` band
  closes the section. **No map embed, no drawn map**, per the page-wide rule.
- The eleven towns are a typographic index with real hairline rules and a copper
  node per row, set in the left column beside the address card — the first pass
  put it full-width below both, which left a dead quarter-section of empty wash.
- **Animation — Address Card Slide-In on Scroll** + a fast 45ms index stagger
  (deliberately below the 80ms floor: eleven items at 110ms would take 1.2s to
  finish, which reads as a queue, not a cascade) + **Video/Image Focus Pull** on
  the band. Hover: rows inset and the node fills. **Budget: 4.**

### 7. Our Story
- **Layout — Split Story with Sticky Photo** (assigned). The **dates rule
  applies**: the copy contains no dated milestones, so the assigned-elsewhere
  timeline treatments are ruled out and the three paragraphs ship verbatim as
  continuous prose.
- **Visual style — Warm Archival Photo Treatment** (assigned): a warm sepia grade
  on a matted, faintly rotated print with a locative caption.
- **Animation — Story Section Sticky Scroll Progress** + **Progressive Reveal
  Scrub**: the copper rule beside the prose is tied to scroll position rather
  than firing once, so it tracks the read. **Budget: 3.**

### 8. Final CTA
- **Layout — Full-Width CTA Banner** (assigned). *Urgent or Emergency CTA Banner*
  rejected — the copy ("Ready When You Are") is calm, and manufactured urgency
  would contradict both the copy and the voice brief.
- **Visual style — Textured Warm CTA Background** (assigned), executed as the
  page's **one dark band**: warm bark ground, heaviest grain, `outage-night` at
  low opacity behind it. Warm in hue, dark in value — it satisfies the assigned
  style and the rhythm's "one dark band before the footer" at the same time.
- **Animation — the page's only `useCursorGlow`**, per the richness file's
  1–2-per-page limit and its dark-surface-only condition, plus a grouped
  entrance. **Budget: 3.** Reduced motion: glow off entirely.

### 9. FAQ
- **Layout — Conversational FAQ Feed** (assigned). Six pairs, inside the entry's
  5–8 shape. Every answer shows in full — the entry's whole argument is that this
  reads more honestly than hiding them behind a click, which suits a business
  whose own reviews say "no scare tactics".
- **Reconciled with the build brief's quality floor:** each question is
  nonetheless a real `<button>` with `aria-expanded` / `aria-controls`, open by
  default and individually collapsible. That satisfies §8's accordion
  requirement literally without giving up the feed's open presentation, and it
  isn't dead UI — the toggles genuinely work (verified).
- **Visual style — Warm Illustrated Accordion** (assigned), read as restrained
  hairline and texture work, not clip art: a threaded rule down the feed with a
  copper node per question and answers in soft, grained speech panels.
- **Animation — Staggered Fade-In on Scroll** (90ms) + **Accordion Expand and
  Collapse** via `grid-template-rows: 0fr → 1fr` + **Icon Morph** (one minus
  glyph that gains a crossing stroke). **Budget: 3.**

### Footer
- **Layout — Mega Footer.** Four columns per the prompt.
- **Visual style — Textured Footer Background** (assigned): bark with the
  heaviest grain and fibre on the page.
- **Animation — Link Column Staggered Fade-In on Scroll** (110ms, column as a
  unit) + **Underline Sweep** on every link. **Budget: 4.**
- **No fabricated social profiles.** No verifiable Facebook or Instagram account
  exists for this business, so the icon row points at real working channels —
  phone, SMS, email, and the business's own live site.

### Sticky call bar
Call-only, plus an SMS shortcut. Held back until 340px of scroll specifically so
it cannot occupy the fold the hero is required to fill.

---

## Finishing pass 1 — elevation sweep

| Section | Outcome |
|---|---|
| Header | Left as built — already carries the textured divider, the sweep and the scroll collapse. Appropriate ambition for furniture. |
| Hero | **Upgraded.** Hero photo swapped from `explaining-panel` to `panel-upgrade-hero`: the split-screen entry warns that a 50/50 split gives the image real weight, and a two-person scene cropped to a tall panel was an unreadable blur. Added a second mask so the band's foot dissolves rather than cutting hard. |
| Reviews | **Upgraded.** Rebuilt from a flat 6-cell grid into the aggregate-spans-two-rows + wide-featured-quote composition (see above). The first pass left two quote cards stretched half-empty — the exact flatness this repository exists to prevent. |
| Trust badges | Left as built — the certificate double-rule is already the elevated version of the entry. |
| Why Us | Left as built — Photographic Icon Replacement plus the rotate-to-true hover is the section's ambition, and adding more would compete with the widget. |
| Services | **Upgraded.** Wide photo bands added to the paper cards rather than icons, so the section isn't body copy on a flat ground. |
| Coverage | **Upgraded.** Index moved into the left column; row rules given a value that's actually visible on the wash; full-bleed photo divider added. |
| Story | Left as built — the scrub rule is already the scroll-linked (not fire-once) version. |
| Final CTA | **Upgraded.** Given the cursor glow, which is the page's one permitted use. |
| FAQ | Left as built — a deliberate quiet moment before the footer. |
| Footer | Left as built. |

## Finishing pass 2 — coherence sweep

- **Grain calibration — the one thing Pass 1 broke.** Small surfaces paint grain
  with `background-blend-mode`, which has no opacity control, so full-strength
  multiply was turning warm parchment cards flat grey. Added `--grain-mul`, a
  pre-attenuated variant, and moved every blended surface onto it. Texture stays
  visibly strong (the declared risk); warmth comes back.
- **Photographic systems checked against each other.** Why Us uses small matted
  4:5 crops; Services uses wide 16:9 bands; Story uses one large matted print;
  Coverage uses a full-bleed divider. Four distinct treatments, one paper
  language — no two sections read as the same device.
- **Motion load.** Four page-unique techniques (word reveal, cursor glow,
  parallax, scrub), each used exactly once. No ambient drift was added anywhere,
  which would have stacked behind sections that already have foreground motion.
- **Style-family spread.** textured-organic: hero, trust badges, services,
  coverage, story, CTA, footer. warm-approachable: why us, FAQ, reviews.
  editorial creeps in only through the type mechanics, never as a section's
  dominant family — consistent with the assigned families.
- **Two rules deliberately not walked back:** the reviews' wide featured card and
  the coverage index relocation both add structure rather than decoration, and
  neither pushes a fourth section into a repeated shape.

---

## Known deviations, all deliberate

1. **Photo and Card Testimonial Block** applied at block level, not per quote —
   its own *Avoid when* triggers (no customer photos exist and none may be
   fabricated).
2. **Mission/Story-Led Value Prop** carried by a narrative rail rather than a
   mission paragraph — the copy is fixed and no mission sentence exists to use.
3. **Conversational FAQ Feed** given real collapsible controls so the build
   brief's `aria-expanded`/`aria-controls` floor is met without abandoning the
   open-feed presentation.
4. Timeline treatments avoided throughout — no dated milestones exist in the
   copy, and the art-direction dates rule forbids inventing one.
