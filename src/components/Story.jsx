import { Reveal, Stagger, useScrub } from '../lib/motion.jsx'
import { story } from '../data/site.js'
import './Story.css'

/*
 * Our Story — Split Story with Sticky Photo / Warm Archival Photo Treatment.
 * The prompt's story copy carries no dates or ordered milestones, so a
 * timeline treatment is ruled out by ART-DIRECTION's own dates rule. The
 * paragraphs ship verbatim as continuous prose beside a pinned, matted photo.
 */

export default function Story() {
  const scrubRef = useScrub({ maxWidth: 900 })

  return (
    <section className="section story grain ground-paper" id="story" aria-labelledby="story-h2">
      <div className="shell layer story__grid">
        <div className="story__aside">
          <Reveal variant="settle" duration={900} className="story__frame">
            <figure className="story__figure figure-reset">
              <img
                className="story__img"
                src={`/images/${story.image.name}.webp`}
                srcSet={`/images/${story.image.name}-800.webp 800w, /images/${story.image.name}.webp 1600w`}
                sizes="(max-width: 900px) 92vw, 38vw"
                width={1600}
                height={1200}
                alt={story.image.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="story__cap">{story.caption}</figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="story__main">
          <Reveal variant="fade" as="p" className="eyebrow">
            {story.eyebrow}
          </Reveal>
          <Reveal variant="clip" delay={90}>
            <h2 className="h2 story__h2" id="story-h2">
              {story.heading}
            </h2>
          </Reveal>

          <div className="story__prose" ref={scrubRef}>
            <Stagger step={140} base={140}>
              {story.paragraphs.map((paragraph, i) => (
                <Reveal key={i} variant="rise-sm" as="p" className="story__p">
                  {paragraph}
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
