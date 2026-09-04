import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, whyUs } from '../data/site.js'
import './WhyUs.css'

/*
 * Value proposition — Mission/Story-Led Value Prop, with the icon slot filled
 * by PHOTOGRAPHIC ICON REPLACEMENT: four small matted photo crops, one per
 * reason, hand-placed a degree or two off the grid. This is the page's one
 * genuinely uncommon device and the reason the section is a narrative rail
 * plus a list rather than a four-up icon grid.
 */

const TILTS = ['-1.6deg', '1.3deg', '-1.1deg', '1.7deg']

export default function WhyUs() {
  return (
    <section className="section why grain ground-paper" aria-labelledby="why-h2">
      <div className="shell layer why__grid">
        <div className="why__rail">
          <Reveal variant="fade" as="p" className="eyebrow">
            {whyUs.eyebrow}
          </Reveal>
          <Reveal variant="clip" delay={90}>
            <h2 className="h2 why__h2" id="why-h2">
              {whyUs.heading}
            </h2>
          </Reveal>
          <Reveal variant="rise-sm" delay={220} as="p" className="why__rail-note">
            {business.hoursWeekday}
            <span className="why__rail-line" aria-hidden="true" />
            {business.hoursWeekend}
            <span className="why__rail-line" aria-hidden="true" />
            {business.hoursAfter}
          </Reveal>
        </div>

        <Stagger className="why__list" step={130} as="ul">
          {whyUs.items.map((item, i) => (
            <Reveal key={item.title} variant="rise" as="li" className="why__item">
              <figure className="why__crop figure-reset" style={{ '--tilt': TILTS[i] }}>
                <img
                  className="why__crop-img"
                  src={`/images/${item.image.name}.webp`}
                  srcSet={`/images/${item.image.name}-800.webp 800w, /images/${item.image.name}.webp 1600w`}
                  sizes="140px"
                  width={1600}
                  height={1200}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="why__text">
                <h3 className="h3 why__title">{item.title}</h3>
                <p className="why__body">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
