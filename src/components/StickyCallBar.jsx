import { MessageSquare, PhoneCall } from 'lucide-react'
import { useScrolled } from '../lib/motion.jsx'
import { business } from '../data/site.js'
import './StickyCallBar.css'

/*
 * Sticky mobile call bar. Deliberately held back until the visitor has moved
 * past the hero: it must not sit over the fold the hero is required to fill.
 */

export default function StickyCallBar() {
  const past = useScrolled(340)

  return (
    <div className={`callbar${past ? ' is-in' : ''}`} aria-hidden={!past}>
      <a className="callbar__call" href={business.phoneHref} tabIndex={past ? 0 : -1}>
        <PhoneCall size={17} strokeWidth={2} aria-hidden="true" />
        Call {business.phoneDisplay}
      </a>
      <a
        className="callbar__text"
        href={business.smsHref}
        aria-label={`Text ${business.phoneDisplay}`}
        tabIndex={past ? 0 : -1}
      >
        <MessageSquare size={17} strokeWidth={2} aria-hidden="true" />
      </a>
    </div>
  )
}
