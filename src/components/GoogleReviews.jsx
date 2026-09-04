import { Star } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { reviews } from '../data/site.js'
import './GoogleReviews.css'

/*
 * PLACEHOLDER CONTENT.
 * Every review below is fabricated and stands in for the real Google Business
 * Profile reviews. Swap them for verified GBP content — and the real aggregate
 * figure — before this page goes anywhere near a live domain. The on-page note
 * beneath the grid says the same thing to anyone reading the rendered page.
 */

function GoogleGlyph() {
  return (
    <svg className="rev__g" viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.44a5.5 5.5 0 0 1-2.39 3.6v3h3.86c2.26-2.08 3.56-5.15 3.56-8.79Z"
        opacity="0.95"
      />
      <path
        fill="currentColor"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.87-3c-1.08.72-2.45 1.15-4.08 1.15-3.14 0-5.8-2.12-6.75-4.97H1.25v3.09A12 12 0 0 0 12 24Z"
        opacity="0.72"
      />
      <path
        fill="currentColor"
        d="M5.25 14.27a7.2 7.2 0 0 1 0-4.54V6.64H1.25a12 12 0 0 0 0 10.72l4-3.09Z"
        opacity="0.5"
      />
      <path
        fill="currentColor"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.2 15.24 0 12 0A12 12 0 0 0 1.25 6.64l4 3.09C6.2 6.87 8.86 4.75 12 4.75Z"
        opacity="0.85"
      />
    </svg>
  )
}

function Stars({ label }) {
  return (
    <span className="stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={13} strokeWidth={0} fill="currentColor" aria-hidden="true" />
      ))}
      <span className="sr-only">{label}</span>
    </span>
  )
}

export default function GoogleReviews() {
  return (
    <section className="section rev grain ground-paper2" id="reviews" aria-labelledby="rev-h2">
      <div className="shell layer">
        <div className="rev__head">
          <Reveal variant="fade" as="p" className="eyebrow">
            {reviews.eyebrow}
          </Reveal>
          <Reveal variant="clip" delay={80}>
            <h2 className="h2 rev__h2" id="rev-h2">
              {reviews.heading}
            </h2>
          </Reveal>
        </div>

        <Stagger className="rev__grid" step={95}>
          <Reveal variant="rise" className="rev__agg">
            <figure className="rev__agg-photo figure-reset">
              <img
                className="rev__agg-img"
                src={`/images/${reviews.image.name}.webp`}
                srcSet={`/images/${reviews.image.name}-800.webp 800w, /images/${reviews.image.name}.webp 1600w`}
                sizes="(max-width: 700px) 92vw, 30vw"
                width={1600}
                height={900}
                alt={reviews.image.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="rev__agg-body">
              <span className="rev__agg-source">
                <GoogleGlyph />
                Google
              </span>
              <p className="rev__agg-score">
                <span className="rev__agg-num">{reviews.aggregateScore}</span>
                <span className="rev__agg-of">{reviews.aggregateOutOf}</span>
              </p>
              <Stars label="Rated 4.9 out of 5" />
              <p className="rev__agg-count">{reviews.aggregateCount}</p>
            </div>
          </Reveal>

          {reviews.items.map((item, i) => (
            <Reveal
              key={item.name}
              variant="rise"
              as="figure"
              className={`rev__card${i === reviews.items.length - 1 ? ' rev__wide' : ''}`}
            >
              <div className="rev__card-top">
                <Stars label="Rated 5 out of 5" />
                <GoogleGlyph />
              </div>
              <blockquote className="rev__quote">
                <p className="rev__quote-text">{item.quote}</p>
              </blockquote>
              <figcaption className="rev__by">{item.name}</figcaption>
            </Reveal>
          ))}
        </Stagger>

        <Reveal variant="fade" delay={120} className="rev__foot">
          <p className="placeholder-note">{reviews.placeholderNote}</p>
        </Reveal>
      </div>
    </section>
  )
}
