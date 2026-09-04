import { PhoneCall } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, cta, services } from '../data/site.js'
import './Services.css'

export default function Services() {
  return (
    <section className="section svc grain ground-paper2" id="services" aria-labelledby="svc-h2">
      <div className="shell layer">
        <div className="svc__head">
          <div className="svc__head-copy">
            <Reveal variant="fade" as="p" className="eyebrow">
              {services.eyebrow}
            </Reveal>
            <Reveal variant="clip" delay={90}>
              <h2 className="h2 svc__h2" id="svc-h2">
                {services.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal variant="rise-sm" delay={200} className="svc__head-cta">
            <a className="btn btn-ghost" href={business.phoneHref}>
              <PhoneCall className="btn-icon" size={15} strokeWidth={2} aria-hidden="true" />
              {cta.call}
            </a>
          </Reveal>
        </div>

        <Stagger className="svc__grid" step={100} as="ul">
          {services.items.map((item) => (
            <Reveal key={item.title} variant="rise" as="li" className="svc__card">
              <div className="svc__band">
                <img
                  className="svc__img"
                  src={`/images/${item.image.name}.webp`}
                  srcSet={`/images/${item.image.name}-800.webp 800w, /images/${item.image.name}.webp 1600w`}
                  sizes="(max-width: 640px) 92vw, (max-width: 1000px) 46vw, 30vw"
                  width={1600}
                  height={1200}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="svc__band-wash" aria-hidden="true" />
              </div>
              <div className="svc__body">
                <h3 className="h3 svc__title">{item.title}</h3>
                <p className="svc__copy">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
