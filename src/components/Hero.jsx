import { useEffect, useState } from 'react'
import { Award, MessageSquare, PhoneCall, Shield } from 'lucide-react'
import { Reveal, Stagger, WordReveal, useParallax } from '../lib/motion.jsx'
import { business, cta, hero } from '../data/site.js'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import './Hero.css'

const BADGE_ICONS = {
  shield: Shield,
  award: Award,
  'phone-call': PhoneCall,
  'message-square': MessageSquare,
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const photoRef = useParallax(0.06, { maxWidth: 1099 })

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="hero grain fibre" id="top" aria-labelledby="hero-widget-title">
      <div className="hero__photo">
        <div className="hero__photo-inner" ref={photoRef}>
          <img
            className="hero__photo-img"
            src={`/images/${hero.image.name}.webp`}
            srcSet={`/images/${hero.image.name}-800.webp 800w, /images/${hero.image.name}.webp 1600w`}
            sizes="(max-width: 1099px) 1px, 52vw"
            width={1600}
            height={900}
            alt={hero.image.alt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <span className="hero__photo-wash" aria-hidden="true" />
      </div>

      <div className="shell-wide hero__inner layer">
        <div className="hero__rule" aria-hidden="true" />

        <div className="hero__copy">
          <Reveal variant="fade" delay={60} duration={700} as="p" className="hero__eyebrow">
            {hero.eyebrow}
          </Reveal>

          <h1 className="hero__h1" id="hero-h1">
            <WordReveal text={hero.headline} trigger={loaded} delay={180} step={72} />
          </h1>

          <Reveal variant="rise-sm" delay={760} duration={700} as="p" className="hero__sub">
            {hero.subheadline}
          </Reveal>

          <Stagger className="hero__badges" step={90} base={880} as="ul" threshold={0}>
            {hero.badges.map((badge) => {
              const Icon = BADGE_ICONS[badge.icon]
              return (
                <Reveal key={badge.label} variant="rise-sm" as="li" className="hero__badge">
                  <span className="hero__badge-icon" aria-hidden="true">
                    <Icon size={15} strokeWidth={1.9} />
                  </span>
                  <span className="hero__badge-label">{badge.label}</span>
                </Reveal>
              )
            })}
          </Stagger>

          <Reveal variant="rise-sm" delay={1260} duration={640} className="hero__ctas">
            <a className="btn btn-primary btn-lg hero__cta-call" href={business.phoneHref}>
              <PhoneCall className="btn-icon" size={17} strokeWidth={2} aria-hidden="true" />
              {cta.call}
            </a>
            <a className="btn btn-ghost btn-lg hero__cta-alt" href="#services">
              {cta.services}
            </a>
          </Reveal>

          <Reveal variant="fade" delay={1440} as="p" className="hero__hours">
            {business.hoursWeekday} · {business.hoursAfter.toLowerCase()}
          </Reveal>
        </div>

        <Reveal variant="settle" delay={520} duration={900} className="hero__widget">
          <PhotoDiagnosis />
        </Reveal>
      </div>
    </section>
  )
}
