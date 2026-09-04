import { MessageSquare, PhoneCall } from 'lucide-react'
import { Reveal, useCursorGlow } from '../lib/motion.jsx'
import { business, cta, finalCta } from '../data/site.js'
import './FinalCTA.css'

/*
 * Final CTA — Full-Width CTA Banner / Textured Warm CTA Background, rendered
 * as the page's single dark band. Warm in hue (bark + copper light), dark in
 * value, so it reads as the tonal event the page rhythm asks for without
 * turning the calm "Ready When You Are" copy into an emergency siren.
 *
 * This is the page's ONE useCursorGlow element — dark surface, used once.
 */

export default function FinalCTA() {
  const glow = useCursorGlow()

  return (
    <section
      className="section cta grain ground-bark"
      id="cta"
      aria-labelledby="cta-h2"
      {...glow}
    >
      <div className="cta__photo" aria-hidden="true">
        <img
          className="cta__photo-img"
          src={`/images/${finalCta.image.name}.webp`}
          srcSet={`/images/${finalCta.image.name}-800.webp 800w, /images/${finalCta.image.name}.webp 1600w`}
          sizes="100vw"
          width={1600}
          height={900}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="cta__glow" aria-hidden="true" />

      <div className="shell-narrow layer cta__inner">
        <Reveal variant="fade" as="p" className="eyebrow cta__eyebrow">
          {finalCta.eyebrow}
        </Reveal>
        <Reveal variant="clip" delay={80}>
          <h2 className="cta__h2" id="cta-h2">
            {finalCta.headline}
          </h2>
        </Reveal>
        <Reveal variant="rise-sm" delay={200} as="p" className="cta__sub">
          {finalCta.supporting}
        </Reveal>
        <Reveal variant="rise-sm" delay={300} className="cta__actions">
          <a className="btn btn-primary btn-lg" href={business.phoneHref}>
            <PhoneCall className="btn-icon" size={17} strokeWidth={2} aria-hidden="true" />
            {cta.call}
          </a>
          <a className="btn btn-outline-invert btn-lg" href={business.smsHref}>
            <MessageSquare className="btn-icon" size={17} strokeWidth={2} aria-hidden="true" />
            {cta.text}
          </a>
        </Reveal>
        <Reveal variant="fade" delay={420} as="p" className="cta__note">
          {business.hoursWeekday} · {business.hoursWeekend} · {business.hoursAfter}
        </Reveal>
      </div>
    </section>
  )
}
