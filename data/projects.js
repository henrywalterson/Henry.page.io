const projects = [
  {
    slug: 'project-one',
    tag: '[PLACEHOLDER: tag e.g. Mobile App]',
    title: '[PLACEHOLDER: Project One — Two-Line Title Here]',
    subtitle: '[PLACEHOLDER: subtitle]',
    coverImage: 'https://placehold.co/1200x600/3B82F6/FFFFFF?text=Project+One+Cover',
    thumbnailImage: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Project+One',
    description: '[PLACEHOLDER: One-line description of what this project is about]',
    behanceUrl: '#',
    featured: true,
    meta: {
      role: '[PLACEHOLDER: Lead Product Designer]',
      company: '[PLACEHOLDER: Company / Product Name]',
      timeline: '[PLACEHOLDER: Jan 2024 – Mar 2024]',
      tools: '[PLACEHOLDER: Figma, Maze, Notion]',
    },
    summary: '[PLACEHOLDER: One-line project summary that captures the core value delivered]',
    context: '[PLACEHOLDER: 2–3 sentences describing the context. What is this product? Who uses it? What was the situation before this project started?]',
    problem: '[PLACEHOLDER: A clear, bold statement of the core problem. What was broken, missing, or painful?]',
    research: '[PLACEHOLDER: Describe the research and process phase. What methods did you use? What did you discover? Include key insights here.]',
    researchImage: 'https://placehold.co/900x500/E0E7FF/1E3A8A?text=Research+%2F+Process+Diagram',
    decisions: [
      {
        number: '01',
        heading: '[PLACEHOLDER: Key Decision Heading]',
        reasoning: '[PLACEHOLDER: Explain the rationale for this design decision. Why this approach and not another? What constraints or insights shaped it?]',
        image: 'https://placehold.co/800x450/F1F5F9/334155?text=Decision+01+Screen',
      },
      {
        number: '02',
        heading: '[PLACEHOLDER: Key Decision Heading]',
        reasoning: '[PLACEHOLDER: Explain the rationale for this design decision.]',
        image: 'https://placehold.co/800x450/F1F5F9/334155?text=Decision+02+Screen',
      },
      {
        number: '03',
        heading: '[PLACEHOLDER: Key Decision Heading]',
        reasoning: '[PLACEHOLDER: Explain the rationale for this design decision.]',
        image: 'https://placehold.co/800x450/F1F5F9/334155?text=Decision+03+Screen',
      },
    ],
    screens: [
      { image: 'https://placehold.co/700x500/DBEAFE/1E40AF?text=Final+Screen+1', caption: '[PLACEHOLDER: Screen caption]' },
      { image: 'https://placehold.co/700x500/DBEAFE/1E40AF?text=Final+Screen+2', caption: '[PLACEHOLDER: Screen caption]' },
      { image: 'https://placehold.co/700x500/DBEAFE/1E40AF?text=Final+Screen+3', caption: '[PLACEHOLDER: Screen caption]' },
    ],
    impact: {
      metrics: [
        { value: '[XX%]', label: '[PLACEHOLDER: metric label]' },
        { value: '[XX%]', label: '[PLACEHOLDER: metric label]' },
      ],
    },
    reflection: {
      quote: '[PLACEHOLDER: A pull-quote capturing the most important lesson or takeaway from this project.]',
      limitation: '[PLACEHOLDER: A brief, honest note on what you would do differently or what was out of scope.]',
    },
    nextProject: 'project-two',
  },
  {
    slug: 'project-two',
    tag: '[PLACEHOLDER: tag e.g. Web Platform]',
    title: '[PLACEHOLDER: Project Two — Two-Line Title Here]',
    subtitle: '[PLACEHOLDER: subtitle]',
    coverImage: 'https://placehold.co/1200x600/6366F1/FFFFFF?text=Project+Two+Cover',
    thumbnailImage: 'https://placehold.co/600x400/4338CA/FFFFFF?text=Project+Two',
    description: '[PLACEHOLDER: One-line description of what this project is about]',
    behanceUrl: '#',
    featured: false,
    meta: {
      role: '[PLACEHOLDER: Product Designer]',
      company: '[PLACEHOLDER: Company / Product Name]',
      timeline: '[PLACEHOLDER: Apr 2024 – Jun 2024]',
      tools: '[PLACEHOLDER: Figma, Miro, Hotjar]',
    },
    summary: '[PLACEHOLDER: One-line project summary that captures the core value delivered]',
    context: '[PLACEHOLDER: Context paragraph for project two.]',
    problem: '[PLACEHOLDER: Problem statement for project two.]',
    research: '[PLACEHOLDER: Research and process description for project two.]',
    researchImage: 'https://placehold.co/900x500/E0E7FF/1E3A8A?text=Research+%2F+Process+Diagram',
    decisions: [
      {
        number: '01',
        heading: '[PLACEHOLDER: Key Decision Heading]',
        reasoning: '[PLACEHOLDER: Explain the rationale for this design decision.]',
        image: 'https://placehold.co/800x450/F1F5F9/334155?text=Decision+01+Screen',
      },
      {
        number: '02',
        heading: '[PLACEHOLDER: Key Decision Heading]',
        reasoning: '[PLACEHOLDER: Explain the rationale for this design decision.]',
        image: 'https://placehold.co/800x450/F1F5F9/334155?text=Decision+02+Screen',
      },
    ],
    screens: [
      { image: 'https://placehold.co/700x500/DBEAFE/1E40AF?text=Final+Screen+1', caption: '[PLACEHOLDER: Screen caption]' },
      { image: 'https://placehold.co/700x500/DBEAFE/1E40AF?text=Final+Screen+2', caption: '[PLACEHOLDER: Screen caption]' },
    ],
    impact: null,
    reflection: {
      quote: '[PLACEHOLDER: A pull-quote capturing the most important lesson or takeaway.]',
      limitation: '[PLACEHOLDER: What you would do differently or what was out of scope.]',
    },
    nextProject: 'project-one',
  },
];

module.exports = projects;
