import { Globe, Mail, MessageSquare, Phone } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, footer } from '../data/site.js'
import './Footer.css'

/*
 * Footer — Mega Footer / Textured Footer Background.
 *
 * No verifiable Facebook or Instagram profile exists for this business, so no
 * social handle is invented. The icon row points at real, working channels —
 * phone, text, email, and the business's own live site — instead. Noted in the
 * README as a documented gap.
 */

const CHANNELS = [
  { label: 'Call Naughton Electrical', href: business.phoneHref, Icon: Phone },
  { label: 'Text Naughton Electrical', href: business.smsHref, Icon: MessageSquare },
  { label: 'Email Naughton Electrical', href: business.emailHref, Icon: Mail },
  { label: 'Visit the current Naughton Electrical site', href: business.sourceSite, Icon: Globe },
]

export default function Footer() {
  return (
    <footer className="ftr grain fibre ground-bark" id="footer">
      <div className="shell layer">
        <Stagger className="ftr__cols" step={110}>
          <Reveal variant="rise-sm" className="ftr__col ftr__col--brand">
            <p className="ftr__mark">
              <span className="ftr__mark-name">Naughton</span>
              <span className="ftr__mark-sub">Electrical</span>
            </p>
            <p className="ftr__mission">{footer.mission}</p>
            <ul className="ftr__social">
              {CHANNELS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    className="ftr__social-link"
                    href={href}
                    aria-label={label}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : null)}
                  >
                    <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="rise-sm" className="ftr__col">
            <h3 className="ftr__head">{footer.servicesHeading}</h3>
            <ul className="ftr__list">
              {footer.services.map((item) => (
                <li key={item}>
                  <a className="ftr__link" href="#services">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="rise-sm" className="ftr__col">
            <h3 className="ftr__head">{footer.linksHeading}</h3>
            <ul className="ftr__list">
              {footer.links.map((item) => (
                <li key={item.label}>
                  <a className="ftr__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="rise-sm" className="ftr__col">
            <h3 className="ftr__head">{footer.contactHeading}</h3>
            <address className="ftr__address">
              <span className="ftr__biz">{business.name}</span>
              <span>{business.addressStreet}</span>
              <span>{business.addressCity}</span>
              <a className="ftr__link ftr__phone" href={business.phoneHref}>
                {business.phoneDisplay}
              </a>
              <a className="ftr__link" href={business.smsHref}>
                Text {business.phoneDisplay}
              </a>
              <a className="ftr__link" href={business.emailHref}>
                {business.email}
              </a>
            </address>
          </Reveal>
        </Stagger>

        <div className="ftr__base">
          <p className="ftr__copy">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="ftr__note">
            Unsolicited concept site. Reviews and the listed email address are placeholder content.
          </p>
        </div>
      </div>
    </footer>
  )
}
