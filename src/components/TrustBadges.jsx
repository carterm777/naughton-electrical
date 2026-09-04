import { BadgeCheck, HardHat, Landmark, Users } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { trustBadges } from '../data/site.js'
import './TrustBadges.css'

const ICONS = {
  'badge-check': BadgeCheck,
  users: Users,
  'hard-hat': HardHat,
  landmark: Landmark,
}

export default function TrustBadges() {
  return (
    <section className="section section-tight tb grain ground-moss" aria-labelledby="tb-h2">
      <div className="shell layer">
        <div className="tb__head">
          <p className="eyebrow tb__eyebrow">{trustBadges.eyebrow}</p>
          <h2 className="h2 tb__h2" id="tb-h2">
            {trustBadges.heading}
          </h2>
        </div>

        <Stagger className="tb__wall" step={110} as="ul">
          {trustBadges.items.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.label} variant="rise-sm" as="li" className="tb__badge on-paper">
                <span className="tb__seal" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="tb__label">{item.label}</h3>
                <p className="tb__note">{item.note}</p>
              </Reveal>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
