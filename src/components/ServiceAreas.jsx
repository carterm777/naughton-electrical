import { Clock, MapPin, PhoneCall } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, coverage } from '../data/site.js'
import './ServiceAreas.css'

/*
 * Coverage — Neighborhood or Landmark Mention Block / Textured Background
 * Address Card. Hand-built throughout: a typographic town index plus a grained
 * address card, closed by a full-bleed photographic band. No map embed, no
 * drawn "map" pretending to be real geography.
 */

export default function ServiceAreas() {
  return (
    <section className="section cov grain ground-wash" id="coverage" aria-labelledby="cov-h2">
      <div className="shell layer">
        <div className="cov__top">
          <div className="cov__intro">
            <Reveal variant="fade" as="p" className="eyebrow">
              {coverage.eyebrow}
            </Reveal>
            <Reveal variant="clip" delay={90}>
              <h2 className="h2 cov__h2" id="cov-h2">
                {coverage.heading}
              </h2>
            </Reveal>
            <Reveal variant="rise-sm" delay={180} as="p" className="lead cov__framing">
              {coverage.framing}
            </Reveal>

            <Stagger className="cov__index" step={45} as="ul">
              {coverage.areas.map((area) => (
                <Reveal key={area} variant="rise-sm" as="li" className="cov__area">
                  <span className="cov__node" aria-hidden="true" />
                  <span className="cov__area-name">{area}</span>
                </Reveal>
              ))}
            </Stagger>
          </div>

          <Reveal variant="rise" delay={240} className="cov__card">
            <h3 className="h3 cov__card-title">Where To Find Us</h3>
            <address className="cov__address">
              <span className="cov__address-line">
                <MapPin size={14} strokeWidth={1.9} aria-hidden="true" />
                <span>
                  {business.addressStreet}
                  <br />
                  {business.addressCity}
                </span>
              </span>
              <span className="cov__address-line">
                <Clock size={14} strokeWidth={1.9} aria-hidden="true" />
                <span>
                  {business.hoursWeekday}
                  <br />
                  {business.hoursWeekend}
                  <br />
                  {business.hoursAfter}
                </span>
              </span>
            </address>
            <a className="btn btn-primary cov__card-cta" href={business.phoneHref}>
              <PhoneCall className="btn-icon" size={15} strokeWidth={2} aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </div>

      <Reveal variant="focus" duration={900} className="cov__band">
        <img
          className="cov__band-img"
          src={`/images/${coverage.image.name}.webp`}
          srcSet={`/images/${coverage.image.name}-800.webp 800w, /images/${coverage.image.name}.webp 1600w`}
          sizes="100vw"
          width={1600}
          height={900}
          alt={coverage.image.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="cov__band-wash" aria-hidden="true" />
      </Reveal>
    </section>
  )
}
