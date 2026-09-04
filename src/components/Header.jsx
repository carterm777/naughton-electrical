import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Mail, MapPin, Phone, PhoneCall } from 'lucide-react'
import { useScrolled } from '../lib/motion.jsx'
import { business, nav } from '../data/site.js'
import './Header.css'

function NavDropdown({ item }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const closeTimer = useRef(null)
  const panelId = useId()

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const openNow = () => {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      event.stopPropagation()
      setOpen(false)
      wrapRef.current?.querySelector('.nav__trigger')?.focus()
    }
  }

  // Focus leaving the whole group closes it — keeps keyboard users from
  // stranding an open panel behind them.
  const onBlurCapture = (event) => {
    if (!wrapRef.current?.contains(event.relatedTarget)) setOpen(false)
  }

  return (
    <li
      className="nav__item nav__item--has-menu"
      ref={wrapRef}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocusCapture={openNow}
      onBlurCapture={onBlurCapture}
      onKeyDown={onKeyDown}
    >
      <a className="nav__link nav__trigger" href={item.href} aria-expanded={open} aria-controls={panelId}>
        {item.label}
        <ChevronDown className="nav__chev" size={13} strokeWidth={2} aria-hidden="true" />
      </a>
      <div className={`nav__menu${open ? ' is-open' : ''}`} id={panelId}>
        <div className="nav__menu-inner">
          <ul className="nav__menu-list">
            {item.items.map((sub) => (
              <li key={sub}>
                <a className="nav__menu-link" href={item.href}>
                  {sub}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default function Header() {
  const scrolled = useScrolled(28)

  return (
    <header className={`hdr${scrolled ? ' is-scrolled' : ''}`}>
      <div className="hdr__bar grain">
        <div className="shell-wide hdr__bar-inner layer">
          <a className="hdr__bar-item" href={business.phoneHref}>
            <Phone size={12} strokeWidth={2} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <span className="hdr__bar-sep" aria-hidden="true" />
          <a className="hdr__bar-item hdr__bar-item--wide" href={business.emailHref}>
            <Mail size={12} strokeWidth={2} aria-hidden="true" />
            {business.email}
          </a>
          <span className="hdr__bar-sep hdr__bar-sep--wide" aria-hidden="true" />
          <span className="hdr__bar-item hdr__bar-item--muted">
            <MapPin size={12} strokeWidth={2} aria-hidden="true" />
            <span className="hdr__bar-addr-full">{business.addressLine}</span>
            <span className="hdr__bar-addr-short">Devon, AB</span>
          </span>
        </div>
      </div>

      <div className="hdr__main">
        <div className="shell-wide hdr__main-inner">
          <a className="hdr__mark" href="#top">
            <span className="hdr__mark-name">Naughton</span>
            <span className="hdr__mark-sub">Electrical</span>
          </a>

          <nav className="nav" aria-label="Primary">
            <ul className="nav__list">
              {nav.primary.map((item) =>
                item.items ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <li className="nav__item" key={item.label}>
                    <a className="nav__link" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="hdr__actions">
            <a className="hdr__call" href={business.phoneHref}>
              <PhoneCall size={15} strokeWidth={2} aria-hidden="true" />
              <span className="hdr__call-label">{business.phoneDisplay}</span>
              <span className="hdr__call-label-short">Call</span>
            </a>
          </div>
        </div>
        <div className="hdr__rule" aria-hidden="true" />
      </div>

      {/* Mobile: a horizontal link strip, never a hamburger. It retracts on
          scroll so the header reduces to the wordmark + click-to-call. */}
      <nav className="mnav" aria-label="Sections">
        <ul className="mnav__list">
          {nav.primary.map((item) => (
            <li key={item.label}>
              <a className="mnav__link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="mnav__fade" aria-hidden="true" />
      </nav>
    </header>
  )
}
