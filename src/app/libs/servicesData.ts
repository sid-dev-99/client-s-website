export const servicesData = [
  // --- Landing Page Featured Services ---
  {
    id: '1',
    category: 'Astrology & Consultations',
    title: 'Astrology & Kundali',
    imageSrc: '/Services/astrology2.png',
    description: "In-depth horoscope analysis and remedies for life's challenges, covering career, marriage, health, and dosh nivaran.",
    shortDescription: "Personalized horoscope analysis, remedies, and guidance.",
    keywords: ['Kundali Analysis', 'Dosh Nivaran', 'Gemstone Solutions'],
  },
  {
    id: '2',
    category: 'Home & Property Rituals',
    title: 'Vastu & Griha Pravesh', // Covers Griha Pravesh
    imageSrc: '/Services/vastu.png',
    description: 'Harmonize your new home or office with Vastu Shanti pujas and Griha Pravesh ceremonies for prosperity and positivity.',
    shortDescription: "Harmonize spaces with Vastu Shanti & Griha Pravesh.",
    keywords: ['Vastu Dosh Nivaran', 'Griha Pravesh', 'Bhoomi Pujan', 'Vastu Shanti'], // Added Vastu Shanti
  },
  {
    id: '3',
    category: 'Life Milestone Ceremonies',
    title: 'Wedding Ceremonies', // Covers Vivah
    imageSrc: '/Services/wedding2.png',
    description: 'Conducting beautiful and authentic Vivah Sanskar, blessing the sacred union of two souls with traditional Vedic rituals.',
    shortDescription: "Traditional Vivah Sanskar for a sacred union.",
    keywords: ['Pre-wedding Rituals', 'Vivah Sanskar', 'Saptapadi', 'Vivah'], // Added Vivah
  },
  {
    id: '4',
    category: 'Life Milestone Ceremonies',
    title: 'Life Milestone Ceremonies (General)',
    imageSrc: '/Services/wellbeing2.png',
    description: "Honoring life's most important transitions with sacred Sanskaras, from a child's naming ceremony to the sacred thread.",
    shortDescription: "Sacred Sanskaras for life's significant transitions.",
    keywords: ['Naamkaran', 'Mundan', 'Janeu Sanskar', 'Annaprashan'],
  },
  {
    id: '5',
    category: 'Specific Pujas & Havans',
    title: 'Pujas for Well-being',
    imageSrc: '/Services/wellbeing.png',
    description: 'Specialized pujas like Mahamrityunjay Jaap and Grah Shanti to remove obstacles and attract health, wealth, and success.',
    shortDescription: "Pujas for health, wealth, and success.",
    keywords: ['Grah Shanti', 'Mahamrityunjay Jaap', 'Lakshmi Puja', 'Health', 'Wealth'],
  },
//   {
//     id: '6',
//     category: 'Specific Pujas & Havans',
//     title: 'Havan & Yagya', // Covers Mrityunjaya Havan
//     imageSrc: '/Services/havan.png',
//     description: 'Performing powerful Havans and Yagyas, such as Navchandi Yagya, to create a divine atmosphere and invoke blessings.',
//     shortDescription: "Powerful fire rituals for divine blessings.",
//     keywords: ['Navchandi Yagya', 'Havan Rituals', 'Spiritual Energy', 'Mrityunjaya Havan', 'Yagya'], // Added Mrityunjaya Havan
//   },

  // --- Additional Services for the Services Page (ensuring all mentioned are here) ---
  // Astrology & Consultations
  {
    id: '7',
    category: 'Astrology & Consultations',
    title: 'Kundali Dosh Nivaran',
    imageSrc:'/Services/havan.png',
    description: 'Specialized rituals to mitigate planetary doshas in your birth chart.',
    shortDescription: 'Mitigate planetary imperfections in your birth chart.',
    keywords: ['Mangal Dosh', 'Pitra Dosh', 'Kalsarp Dosh'],
  },
  {
    id: '8',
    category: 'Astrology & Consultations',
    imageSrc:'/Services/kalsarp.png',
    title: 'Kaal Sarp Dosh Nivaran',
    description: 'Specific puja to neutralize the effects of Kaal Sarp Dosh.',
    shortDescription: 'Neutralize effects of Kaal Sarp Dosh for peace.',
    keywords: ['Kalsarp Puja', 'Peace', 'Prosperity'],
  },
  {
    id: '9',
    category: 'Astrology & Consultations',
    title: 'Mangal Dosh Nivaran',
    imageSrc:'/Services/mangaldosh.png',
    description: 'Remedial puja for Mangal Dosh, aiding in marriage and harmony.',
    shortDescription: 'Remedial puja for harmony in marriage.',
    keywords: ['Manglik Dosh', 'Marriage Harmony', 'Relationship'],
  },
  {
    id: '10',
    category: 'Astrology & Consultations',
    title: 'Shani Sade Sati Nivaran',
    imageSrc:'/Services/sadesati.png',
    description: 'Pujas and remedies to alleviate the challenges of Shani Sade Sati.',
    shortDescription: 'Alleviate challenges during Shani Sade Sati period.',
    keywords: ['Shani Puja', 'Sade Sati', 'Obstacle Removal'],
  },

  // Home & Property Rituals
  {
    id: '11',
    category: 'Home & Property Rituals',
    title: 'Vastu Puja',
    imageSrc:'/Services/vastupage.png',
    description: 'General Vastu puja for balancing energies in any property.',
    shortDescription: 'Balance energies for peace and abundance.',
    keywords: ['Vastu Shanti', 'Home Blessing', 'Good Fortune'],
  },
  // Griha Pravesh is covered by 'Vastu & Griha Pravesh' and keywords, but can be a standalone entry too.
  {
    id: '12',
    category: 'Home & Property Rituals',
    title: 'Muhurat',
    imageSrc:'/Services/muhurat.jpg',
    description: 'Auspicious time selection for important events such as housewarming, marriage, business openings, or spiritual rituals. Ensures divine blessings and success in every new beginning..',
    shortDescription: 'Auspicious time selection for important events.',
    keywords: ['Housewarming', 'New Home', 'Blessing'],
  },

  // Life Milestone Ceremonies
  {
    id: '13',
    category: 'Life Milestone Ceremonies',
    title: 'Mundan Sanskar',
    imageSrc:'/Services/mundan.png',
    description: 'First haircut ceremony for a child, seeking blessings for health and purity.',
    shortDescription: 'First haircut ceremony for a child.',
    keywords: ['Hair Ceremony', 'Child Blessing', 'Purity'],
  },
  {
    id: '14',
    category: 'Life Milestone Ceremonies',
    title: 'Naamkaran Sanskar',
    imageSrc:'/Services/namkaran.jpeg',
    description: 'Naming ceremony for a newborn, selecting an auspicious name.',
    shortDescription: 'Auspicious naming ceremony for newborns.',
    keywords: ['Naming Ceremony', 'Baby Blessing', 'Newborn'],
  },
  {
    id: '15',
    category: 'Life Milestone Ceremonies',
    title: 'Janeu Sanskar (Upanayana)',
    imageSrc:'/Services/janeu.png',
    description: 'Sacred thread ceremony marking the spiritual journey.',
    shortDescription: 'Sacred thread ceremony for spiritual initiation.',
    keywords: ['Upanayana', 'Sacred Thread', 'Spiritual Journey'],
  },
  {
    id: '16',
    category: 'Life Milestone Ceremonies',
    title: 'Annaprashan Sanskar',
    imageSrc:'/Services/anna.png',
    description: 'First solid food ceremony for a baby, for health and nourishment.',
    shortDescription: 'First solid food ceremony for infant health.',
    keywords: ['First Feeding', 'Baby Health', 'Nourishment'],
  },
  {
    id: '17',
    category: 'Life Milestone Ceremonies',
    title: 'Vivah Sanskar',
    imageSrc:'/Services/vivah.png',
    description: 'The main traditional Hindu wedding ceremony.',
    shortDescription: 'The main traditional Hindu wedding ceremony.',
    keywords: ['Marriage', 'Vedic Wedding', 'Union'],
  },
  {
    id: '18',
    category: 'Life Milestone Ceremonies',
    title: 'Vivah Anushthan (Engagement)',
    imageSrc:'/Services/anushthan.png',
    description: 'Engagement rituals preceding the main wedding ceremony.',
    shortDescription: 'Engagement rituals for future wedding.',
    keywords: ['Engagement', 'Pre-Wedding', 'Ceremony'],
  },
  {
    id: '19',
    category: 'Life Milestone Ceremonies',
    title: 'Godh Bharai (Baby Shower)',
    imageSrc:'/Services/godhbharai.png',
    description: 'Traditional Indian baby shower for expectant mothers.',
    shortDescription: 'Traditional baby shower for expectant mothers.',
    keywords: ['Baby Shower', 'Mother Blessing', 'Pregnancy'],
  },

  // Specific Pujas & Havans
  // Navgraha Shanti
  {
    id: '21',
    category: 'Specific Pujas & Havans',
    title: 'Navgraha Shanti Puja',
    imageSrc:'/Services/navgraha.png',
    description: 'Pacify planetary deities for peace and well-being.',
    shortDescription: 'Pacify planetary deities for peace and well-being.',
    keywords: ['Planetary Peace', 'Graha Dosh', 'Harmony', 'Navgraha'], // Added Navgraha
  },
  // Mrityunjaya Havan is covered by 'Havan & Yagya' but can be specific
  {
    id: '22',
    category: 'Specific Pujas & Havans',
    title: 'Mrityunjaya Havan',
    imageSrc:'/Services/maha.png',
    description: 'A powerful fire ritual for health, longevity, and warding off untimely death, dedicated to Lord Shiva.',
    shortDescription: 'Powerful fire ritual for health, longevity & protection.',
    keywords: ['Lord Shiva', 'Health', 'Longevity', 'Protection', 'Maha Mrityunjaya'],
  },
  // Satyanarayan Katha
  {
    id: '23',
    category: 'Specific Pujas & Havans',
    title: 'Satyanarayan Katha',
    imageSrc:'/Services/satyanarayanpuja.png',
    description: 'Puja for prosperity, happiness, and fulfillment of desires.',
    shortDescription: 'Puja for prosperity, happiness, and fulfillment of desires.',
    keywords: ['Prosperity', 'Happiness', 'Wish Fulfillment', 'Lord Vishnu'],
  },
  // Rudrabhishek
  {
    id: '24',
    category: 'Specific Pujas & Havans',
    title: 'Rudrabhishek Puja',
    imageSrc:'/Services/rudrabhishekh.png',
    description: 'Worship of Lord Shiva for peace, prosperity, and removal of negativities.',
    shortDescription: 'Worship of Lord Shiva for peace and prosperity.',
    keywords: ['Lord Shiva', 'Negativity Removal', 'Peace', 'Abhishek'],
  },
  // Pind Daan - NEW
  {
    id: '225', // Using a higher ID to distinguish new additions
    category: 'Specific Pujas & Havans',
    imageSrc:'/Services/pinddaan.png',
    title: 'Pind Daan',
    description: 'A sacred ritual performed for the salvation of ancestors and departed souls.',
    shortDescription: 'Sacred ritual for the salvation of ancestors.',
    keywords: ['Ancestral Rites', 'Shraddh', 'Pitr Dosh', 'Salvation'],
  },
  // Remaining from previous list
  {
    id: '26',
    category: 'Specific Pujas & Havans',
    title: 'Lakshmi Kuber Puja',
    imageSrc: '/Services/laxmikuber.png',
    description: 'Puja for attracting wealth and financial stability.',
    shortDescription: 'Attract wealth and financial stability.',
    keywords: ['Wealth', 'Finance', 'Prosperity', 'Lakshmi', 'Kuber'],
  },
  {
    id: '27',
    category: 'Specific Pujas & Havans',
    title: 'Durga Saptashati Path',
    imageSrc: '/Services/durgapath.png',
    description: 'Recitation for protection, strength, and victory over evil.',
    shortDescription: 'Recitation for protection and strength.',
    keywords: ['Durga', 'Protection', 'Victory', 'Chandi Path'],
  },
  {
    id: '28',
    category: 'Specific Pujas & Havans',
    imageSrc: '/Services/ganeshpuja.png',
    title: 'Ganesh Puja',
    description: 'Worship of Lord Ganesha for removing obstacles and new beginnings.',
    shortDescription: 'Worship Lord Ganesha for obstacle removal.',
    keywords: ['Ganesha', 'Obstacle Removal', 'New Beginnings', 'Siddhi'],
  },
//   {
//     id: '29',
//     category: 'Specific Pujas & Havans',
//     title: 'Akhand Ramayan Path',
//     description: 'Continuous recitation of Ramcharitmanas for blessings and spiritual upliftment.',
//     shortDescription: 'Continuous recitation of Ramcharitmanas for blessings.',
//     keywords: ['Ramayana', 'Blessings', 'Devotion', 'Ramcharitmanas'],
//   },
//   {
//     id: '30',
//     category: 'Specific Pujas & Havans',
//     title: 'Sundarkand Path',
//     description: 'Recitation from Ramcharitmanas for strength, courage, and overcoming difficulties, dedicated to Lord Hanuman.',
//     shortDescription: 'Recitation for strength and courage.',
//     keywords: ['Hanuman', 'Strength', 'Courage', 'Ramayana'],
//   },
  {
    id: '31',
    category: 'Specific Pujas & Havans',
    title: 'Hanuman Chalisa Path',
    imageSrc:'/Services/hanumanpuja.png',
    description: 'Recitation for protection, strength, and devotion to Lord Hanuman.',
    shortDescription: 'Recitation for protection and devotion.',
    keywords: ['Hanuman', 'Protection', 'Devotion', 'Chanting'],
  },
  // Additional general Havan if needed
  {
    id: '32',
    category: 'Specific Pujas & Havans',
    title: 'General Havan',
    imageSrc: '/Services/generalhavan.png',
    description: 'A basic fire ritual for purification and invoking general blessings for peace and prosperity.',
    shortDescription: 'Basic fire ritual for general blessings.',
    keywords: ['Fire Ritual', 'Purification', 'Blessings', 'Yagya'],
  },
  // Many more (generic catch-all)
  {
    id: '33',
    category: 'Specific Pujas & Havans',
    title: 'Other Pujas & Rituals',
    imageSrc: '/Services/contact.png',
    description: 'Pandit Ji performs a wide array of other specific pujas and Vedic rituals tailored to your unique needs and requests.',
    shortDescription: 'Customized pujas for your unique needs.',
    keywords: ['Custom Puja', 'Special Request', 'Vedic Rituals', 'Personalized'],
  },
];