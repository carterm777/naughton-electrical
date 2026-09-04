import { useState } from 'react'
import { Minus } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { business, cta, faq } from '../data/site.js'
import './FAQ.css'

/*
 * FAQ — Conversational FAQ Feed / Warm Illustrated Accordion.
 *
 * The feed layout's whole argument is that showing every answer in full reads
 * as more honest than hiding them behind a click, so every item starts OPEN.
 * They are still real <button> disclosures with aria-expanded / aria-controls,
 * so a visitor can collapse what they've read and the section still meets the
 * build brief's accordion accessibility floor. "Illustrated" here is restrained
 * hairline and texture work — a threaded rule with copper nodes — not clip art.
 */

export default function FAQ() {
  const [closed, setClosed] = useState(() => new Set())

  const toggle = (index) => {
    setClosed((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section className="section faq grain ground-paper" id="faq" aria-labelledby="faq-h2">
      <div className="shell layer faq__grid">
        <div className="faq__aside">
          <Reveal variant="fade" as="p" className="eyebrow">
            {faq.eyebrow}
          </Reveal>
          <Reveal variant="clip" delay={80}>
            <h2 className="h2 faq__h2" id="faq-h2">
              {faq.heading}
            </h2>
          </Reveal>
          <Reveal variant="rise-sm" delay={200} className="faq__aside-cta">
            <p className="faq__aside-note">
              Not covered here? Call the shop and ask — you&rsquo;ll get a plain answer either way.
            </p>
            <a className="btn btn-primary" href={business.phoneHref}>
              {cta.call}
            </a>
          </Reveal>
        </div>

        <Stagger className="faq__feed" step={90} as="ul">
          {faq.items.map((item, i) => {
            const open = !closed.has(i)
            return (
              <Reveal key={item.q} variant="rise-sm" as="li" className="faq__item">
                <span className="faq__node" aria-hidden="true" />
                <h3 className="faq__q">
                  <button
                    className="faq__trigger"
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq__q-text">{item.q}</span>
                    <span className={`faq__sign${open ? ' is-open' : ''}`} aria-hidden="true">
                      <Minus size={14} strokeWidth={2.2} />
                    </span>
                  </button>
                </h3>
                <div
                  className={`faq__a${open ? ' is-open' : ''}`}
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <div className="faq__a-inner">
                    <p className="faq__a-text">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
