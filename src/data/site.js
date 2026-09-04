/*
 * All page copy for naughton-electrical, in one place.
 *
 * Everything under PAGE COPY in the prompt ships VERBATIM. The only strings
 * authored here are connective microcopy the brief permits: section eyebrows,
 * H2s, form labels, button text, reassurance lines and alt text — all written
 * to the prompt's VOICE BRIEF (measured, credentialed, plainspoken, no sales
 * patter, no electricity puns).
 */

export const business = {
  name: 'Naughton Electrical',
  city: 'Devon',
  province: 'AB',
  phoneDisplay: '(587) 879-7180',
  phoneHref: 'tel:+15878797180',
  smsHref: 'sms:+15878797180',
  // Placeholder — no email was listed on the source site.
  email: 'contact@naughtonelectrical.com',
  emailHref: 'mailto:contact@naughtonelectrical.com',
  addressLine: '117 Birchwood Dr, Devon, AB T9G 2H9',
  addressStreet: '117 Birchwood Dr',
  addressCity: 'Devon, AB T9G 2H9',
  addressShort: '117 Birchwood Dr, Devon, AB',
  hoursWeekday: 'Monday – Friday, 7 a.m. – 7 p.m.',
  hoursWeekend: 'Saturday & Sunday by appointment',
  hoursAfter: 'After-hours emergency requests accommodated',
  // The business's real, currently-live site. No social profiles were found,
  // so none are invented — see README.
  sourceSite: 'http://devonelectrician.ca/',
}

export const nav = {
  primary: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#story' },
    {
      label: 'Services',
      href: '#services',
      items: [
        'Panel Upgrades & Service Changes',
        'Aluminum Wiring Remediation',
        'Rewiring & New Construction Wiring',
        'Surge Protection',
        'Lighting Installation & Upgrades',
        'Ceiling Fan Installation',
        'Electrical Troubleshooting & Repairs',
        'Subpanels & Additional Circuits',
        'Smart Home Wiring',
        'Switch & Outlet Installation',
        'Hot Tub Wiring',
        'EV Charger Installation',
        'Electrical Safety Inspections',
        'Commercial Tenant Improvements',
        'Emergency Electrical Services',
      ],
    },
    {
      label: 'Service Areas',
      href: '#coverage',
      items: [
        'Devon',
        'Parkland County',
        'Leduc County',
        'Spruce Grove',
        'Stoney Plain',
        'St. Albert',
        'Fort Saskatchewan',
        'Beaumont',
        'Nisku',
        'Windermere',
        'Terwillegar Area',
      ],
    },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#footer' },
    { label: 'Contact', href: '#cta' },
  ],
}

export const hero = {
  eyebrow: 'Naughton Electrical · Devon, Alberta',
  headline: 'Master Electricians Serving Devon, Parkland & Leduc County',
  subheadline:
    'Licensed, Red Seal-credentialed electricians serving homes and businesses across Devon and the surrounding county, with 20 years in the trade.',
  badges: [
    { label: 'Licensed & Insured', icon: 'shield' },
    { label: 'Red Seal Certified', icon: 'award' },
    { label: 'Emergency Service Available', icon: 'phone-call' },
    { label: 'No-Pressure Consultations', icon: 'message-square' },
  ],
  image: {
    name: 'panel-upgrade-hero',
    alt: 'Gloved hands driving a screwdriver into a breaker inside a densely wired residential panel',
  },
}

/* Placeholder reviews. These are FABRICATED stand-ins for the real Google
   Business Profile reviews and must be swapped for verified GBP content
   before this page goes live. Flagged on-page as well. */
export const reviews = {
  eyebrow: 'Google Reviews',
  heading: 'What People Around Devon Say',
  aggregate: '4.9 out of 5 — 47 Google Reviews',
  aggregateScore: '4.9',
  aggregateOutOf: 'out of 5',
  aggregateCount: '47 Google Reviews',
  placeholderNote:
    'Placeholder reviews. Real Google Business Profile reviews get pulled in before launch.',
  image: {
    name: 'winter-house',
    alt: 'A bungalow with a pickup truck in the driveway on a snowy Alberta street',
  },
  items: [
    {
      name: 'Mark T.',
      quote:
        'Called about a breaker that kept tripping and had someone out within the day. Found the problem fast and didn’t try to sell us anything we didn’t need.',
    },
    {
      name: 'Sarah K.',
      quote:
        'Our house still had the old aluminum wiring from the seventies. They walked us through what needed fixing right away and what could wait, no scare tactics.',
    },
    {
      name: 'Jason R.',
      quote:
        'Quoted the panel upgrade before any work started and stuck to it exactly. No surprise charges on the invoice.',
    },
    {
      name: 'Denise L.',
      quote:
        'Asked a dozen questions about installing an EV charger and never felt rushed. Explained the permit process in plain English.',
    },
    {
      name: 'Craig B.',
      quote:
        'Handled a tenant improvement at our shop with almost zero downtime. Professional crew, showed up when they said they would.',
    },
  ],
}

export const trustBadges = {
  eyebrow: 'Credentials',
  heading: 'Credentials And Memberships',
  items: [
    { label: 'BBB Accredited Business', icon: 'badge-check', note: 'Better Business Bureau' },
    { label: 'ECAA Member', icon: 'users', note: 'Electrical Contractors Association of Alberta' },
    { label: 'WCB Alberta Registered', icon: 'hard-hat', note: 'Workers’ Compensation Board' },
    { label: 'Devon & District Chamber of Commerce', icon: 'landmark', note: 'Member in good standing' },
  ],
}

export const whyUs = {
  eyebrow: 'Why Choose Us',
  heading: 'The Way We Work',
  items: [
    {
      title: 'Consultations Built Around Your Budget',
      body: 'We lay out the real options and their real costs before we touch a panel or a wire, so the scope of the job matches what you’re ready to spend, not the other way around.',
      image: {
        name: 'kitchen-table-quote',
        alt: 'An electrician and a homeowner reviewing a written quote across a kitchen table',
      },
    },
    {
      title: 'Red Seal Certified, Fully Credentialed',
      body: 'Our lead electrician holds a Red Seal endorsement, and the shop carries ECAA membership and WCB coverage — the kind of paperwork most homeowners never think to ask about until something’s gone wrong.',
      image: {
        name: 'permit-tag',
        alt: 'Gloved hands holding a permit and inspection clipboard at a meter base',
      },
    },
    {
      title: 'On-Site When We Say We’ll Be',
      body: 'We keep weekday appointment windows from early morning into the evening, with weekends available by request. A breaker that trips at 9 p.m. gets an after-hours call back, not a voicemail until Monday.',
      image: {
        name: 'vans-morning',
        alt: 'Two service vans idling on a snowy residential street early in the morning',
      },
    },
    {
      title: 'Work That Passes Inspection the First Time',
      body: 'Every job gets wired to current Alberta electrical code, load-calculated and permitted the way it’s supposed to be, not the way that’s fastest.',
      image: {
        name: 'load-calc',
        alt: 'Hands holding a multimeter and a load-calculation clipboard in front of an open panel',
      },
    },
  ],
}

export const services = {
  eyebrow: 'Services',
  heading: 'Core Electrical Services',
  items: [
    {
      title: 'Panel Upgrades & Service Changes',
      body: 'Older 60-amp services get replaced with 100-amp or 200-amp panels sized for how homes run today — hot tubs, EV chargers, and everything else pulling power.',
      image: { name: 'panel-new', alt: 'A clean new breaker panel mounted on a white wall with its door open' },
    },
    {
      title: 'Aluminum Wiring Remediation',
      body: 'Homes wired in the late 1960s and early ’70s often carry aluminum branch circuits that need a proper pigtail repair or a full rewire, evaluated room by room instead of guessed at.',
      image: { name: 'rewire-rough-in', alt: 'Rough-in wiring and outlet boxes on a stud wall behind plastic sheeting' },
    },
    {
      title: 'Lighting & Ceiling Fan Installation',
      body: 'From recessed lighting to fan replacements, fixtures get wired to hold their own weight and their own circuit, not spliced onto whatever’s nearby.',
      image: { name: 'pot-light-install', alt: 'An electrician on a ladder installing a pot light in a hallway ceiling' },
    },
    {
      title: 'EV Charger Installation',
      body: 'A dedicated circuit sized to your panel and your vehicle, installed with the permit and inspection Alberta requires, not skipped to save a step.',
      image: { name: 'ev-car-charging', alt: 'A white SUV plugged into a wall-mounted EV charger in a home garage' },
    },
    {
      title: 'Commercial & Industrial Electrical',
      body: 'Tenant improvements, LED retrofits, and light industrial work get scheduled around your operating hours, with service calls handled without shutting a shop down for a day.',
      image: { name: 'commercial-lift', alt: 'An orange scissor lift beneath an exposed ceiling fitted with linear LED strips' },
    },
    {
      title: 'Emergency Electrical Repairs',
      body: 'A breaker that won’t reset or a panel that runs warm gets an after-hours callback and a straight answer about whether it can wait until morning.',
      image: { name: 'burnt-outlet', alt: 'Gloved hands holding a scorched, corroded outlet box removed from a wall' },
    },
  ],
}

export const coverage = {
  eyebrow: 'Service Area',
  heading: 'Where We Work',
  framing:
    'We work throughout Devon and into the surrounding county — from acreages outside town to newer builds on the edge of Edmonton.',
  areas: [
    'Devon',
    'Parkland County',
    'Leduc County',
    'Spruce Grove',
    'Stoney Plain',
    'St. Albert',
    'Fort Saskatchewan',
    'Beaumont',
    'Nisku',
    'Windermere',
    'Terwillegar Area',
  ],
  image: {
    name: 'cranston-hero',
    alt: 'A new-build suburban street running out to the prairie horizon under flat winter light',
  },
}

export const story = {
  eyebrow: 'About The Shop',
  heading: 'One Shop, Twenty Years',
  paragraphs: [
    'Our shop is built around one Red Seal-certified master electrician, Adam, and 20 years of the kind of work that doesn’t show up on a résumé — the panel that hummed a little too loud, the outlet that stopped working the week before Christmas, the tenant improvement that had to go in over a weekend so a shop could reopen Monday.',
    'We’re based in Devon, which means most of our calls start with someone we already know, or someone two doors down from someone we do. That’s part of why we lead with a consultation instead of a quote sheet: we’d rather explain what a panel upgrade buys you than talk you into one you don’t need.',
    'We carry ECAA membership, WCB coverage, and BBB accreditation, and we’re active with the Devon & District Chamber of Commerce — paperwork that matters more to us than it does to most homeowners, because it’s what lets us pull permits anywhere in Alberta and stand behind the work once the inspector’s been through. Residential, commercial, and light industrial jobs all run through the same shop, which means the electrician who rewires your basement is the same one who handles a tenant improvement downtown. Same standards, same code, same phone number either way.',
  ],
  image: {
    name: 'van-paperwork',
    alt: 'An electrician sitting in the open back of a service van, working through paperwork on a laptop',
  },
  caption: 'Devon, Alberta',
}

export const finalCta = {
  eyebrow: 'Get In Touch',
  headline: 'Ready When You Are',
  supporting:
    'Call for a consultation on your panel, your wiring, or the job you’ve been putting off, and we’ll tell you plainly what it needs.',
  image: {
    name: 'outage-night',
    alt: 'A snowy suburban street at night with a single house still lit',
  },
}

export const faq = {
  eyebrow: 'FAQ',
  heading: 'Questions We Get Asked',
  items: [
    {
      q: 'Do you offer emergency electrical service?',
      a: 'Yes. We take after-hours calls for real emergencies — a breaker that won’t reset, a panel that’s warm to the touch, exposed wiring — alongside our regular weekday and by-request weekend appointments.',
    },
    {
      q: 'What areas do you serve around Devon?',
      a: 'We work throughout Devon, Parkland County, and Leduc County, plus Spruce Grove, Stoney Plain, St. Albert, Fort Saskatchewan, Beaumont, Nisku, Windermere, and the Terwillegar area.',
    },
    {
      q: 'Do I need a permit to install a hot tub?',
      a: 'Yes. Alberta requires a permit for hot tub wiring, along with a load calculation and GFCI protection on the circuit, and the work has to pass inspection before the tub gets used.',
    },
    {
      q: 'My house has older wiring — should I be worried?',
      a: 'It depends on the type. Knob-and-tube wiring from the 1930s and aluminum wiring from the late 1960s and early ’70s both carry real risk and are worth having inspected, even if nothing’s acting up yet.',
    },
    {
      q: 'How do I know if my panel needs an upgrade?',
      a: 'A 60-amp service usually can’t keep up with a modern home running an EV charger, a hot tub, or central air on top of everything else — most of those homes need at least 100 amps, and some need 200.',
    },
    {
      q: 'Are you licensed and insured?',
      a: 'Our lead electrician carries a Red Seal certification, and the business is an ECAA member, WCB-registered, and BBB-accredited, with permits pulled anywhere in Alberta.',
    },
  ],
}

export const footer = {
  mission:
    'We’re a Red Seal-certified electrical shop serving Devon, Parkland County, and Leduc County, with regular weekday hours, weekend availability by request, and after-hours emergency calls. Residential, commercial, and light industrial work all run through the same licensed, credentialed crew.',
  servicesHeading: 'Our Services',
  services: [
    'Panel Upgrades & Service Changes',
    'Aluminum Wiring Remediation',
    'EV Charger Installation',
    'Commercial & Industrial Electrical',
    'Emergency Electrical Repairs',
  ],
  linksHeading: 'Quick Links',
  links: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Service Areas', href: '#coverage' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#cta' },
  ],
  contactHeading: 'Find Us',
}

/* Microcopy for the signature widget. */
export const widget = {
  eyebrow: 'Photo Diagnosis',
  heading: 'Send A Photo, Get A Straight Answer',
  intro:
    'Take a picture of the panel, the outlet, or whatever stopped working. An electrician looks at it and calls you back.',
  dropTitle: 'Add a photo of the problem',
  dropHint: 'Drag it here, or browse your files. JPG, PNG, HEIC or WebP, up to 10 MB.',
  dropHintMobile: 'Tap to take a picture or pick one from your camera roll.',
  browse: 'Browse Files',
  replace: 'Replace Photo',
  remove: 'Remove photo',
  describeLabel: 'What’s going on?',
  describePlaceholder:
    'Breaker labelled “kitchen” trips every time the kettle and toaster run together.',
  nameLabel: 'Your name',
  phoneLabel: 'Phone number',
  submit: 'Send For A Look',
  submitNext: 'Next: Describe The Problem',
  submitting: 'Sending…',
  reassurance:
    'Nothing leaves your phone until you press send. No account, no obligation, and a real electrician looks at it — not a form robot.',
  errorType: 'That file isn’t an image. JPG, PNG, HEIC or WebP will work.',
  errorSize: 'That photo is over 10 MB. One straight from your camera roll should be smaller.',
  errorRequired: 'Add a photo or a description so we know what we’re looking at.',
  errorPhone: 'Add a phone number so we can call you back.',
  statusReading: 'Reading the file…',
  statusQueue: 'Passing it to the shop…',
  successTitle: 'Your Photo Is In',
  successBody:
    'We’ll look at it and call you back on the number you left. Weekday hours are 7 a.m. to 7 p.m.; after-hours emergency calls get a callback too.',
  successAgain: 'Send Another Photo',
  successCallLine: 'In a hurry? Call the shop directly.',
  demoNote: 'Demo form — nothing is transmitted anywhere.',
}

export const cta = {
  call: 'Call ' + business.phoneDisplay,
  callShort: 'Call Now',
  text: 'Text Us Instead',
  services: 'Our Services',
}
