const projects = [
  {
    slug: 'vietcharm',
    name: 'VIETCHARM',
    title: "Redesigning a cultural dining show's website to match the premium tone and refine the conversion-ready experience, starting from mobile.",
    primaryTags: ['UX/UI Redesign'],
    coverImage: 'https://placehold.co/1440x640/0f172a/ffffff?text=VIETCHARM',
    role: 'UX/UI Designer (Solo)',
    type: 'Self-initiated Redesign',
    year: '2025',
    scope: 'Homepage · Booking flow · Desktop & Mobile',
    problems: [
      {
        problem: 'The homepage made it hard for users to find their way and make confident decisions.',
        detail: 'Three different nav items all lead to the same page. The feature section overwhelms users with text. The ticket section gives no spatial context to justify the price difference.',
        outcome: 'Clearer navigation and visual decision support reduce hesitation — keeping potential buyers engaged long enough to convert.',
      },
      {
        problem: 'Booking flow has unnecessary friction at the point of highest purchase intent.',
        detail: "Brand content appears before the booking form. There's no persistent order summary, no progress indicator, and no refund policy near the CTA.",
        outcome: 'Fewer steps, persistent order visibility, and trust signals at checkout lower abandonment at the highest-intent moment in the funnel.',
      },
    ],
    process: {
      heading: 'Without access to analytics or heatmaps, I audited the site the way a real user would, then applied structured heuristic evaluation.',
      methods: [
        "Nielsen's Usability Heuristics",
        'Baymard Institute checkout flow research',
        'Luxury hospitality brand reference',
      ],
      evidencePlaceholder: '[PLACEHOLDER: Lighthouse score / WAVE report / date-picker bug screenshot]',
    },
    improvements: [
      {
        column: 'Home page',
        issues: [
          { problem: '3 nav items lead to the same page',         solution: 'Consolidated into 2 clear CTAs in hero' },
          { problem: 'No fallback when video fails to load',       solution: 'Added image fallback' },
          { problem: 'Feature section overwhelms with text',       solution: 'Replaced with expanding panels' },
          { problem: 'Ticket section lacks spatial context',       solution: 'Added interactive seating map' },
          { problem: 'Schedule is long and hard to scan',          solution: 'Condensed into 3 main sections' },
        ],
      },
      {
        column: 'Booking page',
        issues: [
          { problem: 'Content appears before the booking form',    solution: 'Form moved to the top, content removed' },
          { problem: 'No step indicator mid-flow',                 solution: 'Added 2-step progress bar' },
          { problem: 'No persistent order summary',                solution: 'Sticky sidebar with itemized breakdown' },
          { problem: "Redundant 'Book now' CTA on nav bar",        solution: 'Removed from nav when in booking flow' },
        ],
      },
    ],
    lessons: [
      'User intent dictates content hierarchy.',
      'Simplify first, scale complexity later.',
      'Responsive means adapting behavior, not resizing.',
      'Decisions were validated through heuristic evaluation under data constraints.',
      'Trust signals matter at the point of conversion.',
      'Structural friction kills conversion before visuals even matter.',
    ],
    nextSteps: 'If I had more time, I would validate these decisions with real users, particularly first-time visitors arriving from social ads, to confirm whether the changes actually reduce friction or surface new ones I have not seen yet.',
    behanceUrl: '[PLACEHOLDER: behance link]',
    nextProject: 'frenlit',
  },

  {
    slug: 'frenlit',
    name: 'FRENlit',
    title: '[PLACEHOLDER: FRENlit title]',
    primaryTags: ['Mobile App'],
    coverImage: 'https://placehold.co/1440x640/4338CA/ffffff?text=FRENlit',
    role: '[PLACEHOLDER: Product Designer]',
    type: '[PLACEHOLDER: type]',
    year: '[PLACEHOLDER: 2025]',
    scope: '[PLACEHOLDER: iOS · Android]',
    problems: [],
    process: null,
    improvements: [],
    lessons: [],
    nextSteps: null,
    behanceUrl: null,
    nextProject: 'vietcharm',
  },
];

module.exports = projects;
