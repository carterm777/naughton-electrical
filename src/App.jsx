import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import GoogleReviews from './components/GoogleReviews.jsx'
import TrustBadges from './components/TrustBadges.jsx'
import WhyUs from './components/WhyUs.jsx'
import Services from './components/Services.jsx'
import ServiceAreas from './components/ServiceAreas.jsx'
import Story from './components/Story.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import StickyCallBar from './components/StickyCallBar.jsx'

/* The deckle filter that gives the signature widget its torn paper edge.
   feTurbulence + feDisplacementMap on the paper layer only — the widget's
   own type sits above it, untouched. */
function Defs() {
  return (
    <svg className="defs" aria-hidden="true" focusable="false">
      <filter id="deckle" x="-6%" y="-6%" width="112%" height="112%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.022 0.019"
          numOctaves="4"
          seed="7"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="9"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Defs />
      <Header />
      <main id="main">
        <Hero />
        <GoogleReviews />
        <TrustBadges />
        <WhyUs />
        <Services />
        <ServiceAreas />
        <Story />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}
