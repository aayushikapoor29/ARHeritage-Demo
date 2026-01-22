export type Monument = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  modelGlbPath: string;
  modelUsdzPath?: string;
  posterPath?: string;
  city: string;
  state: string;
  tags: string[];
  facts: string[];
};

export const monuments: Monument[] = [
  {
    slug: 'ellora-caves',
    title: 'Ellora Caves',
    shortDescription: 'A UNESCO World Heritage Site featuring Buddhist, Hindu and Jain monuments.',
    longDescription:
      'Ellora is a UNESCO World Heritage Site located in the Aurangabad district of Maharashtra, India. It is one of the largest rock-cut monastery-temple cave complexes in the world, featuring Buddhist, Hindu and Jain monuments, and artwork, dating from the 600–1000 CE period.',
    modelGlbPath: '/models/elora_caves.glb',
    // modelUsdzPath: '/models/ellora-caves/model.usdz', // Not available yet
    // posterPath: '/posters/ellora-caves.webp', // Not available yet
    city: 'Aurangabad',
    state: 'Maharashtra',
    tags: ['Rock-cut', 'Architecture', 'UNESCO'],
    facts: [
      'The Kailasa temple (Cave 16) is the largest monolithic rock excavation in the world.',
      'It features 34 monasteries and temples.',
      'It illustrates the spirit of tolerance that was characteristic of ancient India.'
    ]
  }
];
