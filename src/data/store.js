export const STORE = {
  name: 'XYZ',
  email: 'hello@xyz.example',
  phone: '+91 90000 00000',
  currency: '₹',
  freeShippingAt: 699,
  colors: {
    purple: '#851fe0', lime: '#c9e616', cream: '#fffff2'
  }
}

export const products = [
  {
    id: 'gut-pops',
    slug: 'daily-gut-pops',
    name: 'Daily Gut Pops',
    eyebrow: 'Watermelon • Ages 2+',
    tagline: 'A happy little routine for growing tummies.',
    price: 349,
    compareAt: 399,
    rating: 4.9,
    reviews: 128,
    badge: 'Best Seller',
    image: '/product-image.png',
    bg: '#c9e616',
    accent: '#851fe0',
    packs: [
      { label: '15 Pops', price: 349 },
      { label: '30 Pops · Save 8%', price: 642 },
      { label: '45 Pops · Save 12%', price: 922 }
    ],
    bullets: ['4g prebiotic fibre per serving', 'Zero added sugar', 'Watermelon flavour kids enjoy', 'Individually wrapped for school bags'],
    short: 'Prebiotic fibre with thoughtfully selected everyday ingredients in a convenient kid-friendly pop format.',
    ingredients: 'Chicory root fibre, honey, amla, tulsi, fennel, vitamin C, zinc, natural watermelon flavour.',
    whatItDoes: 'Supports a balanced daily fibre routine and general digestive wellness as part of a varied diet.',
    use: '1 pop daily after a meal, or as directed by your healthcare professional.',
    seo: 'Kid-friendly prebiotic fibre pops with zero added sugar. A convenient daily routine for ages 2+.'
  },
  {
    id: 'throat-pops',
    slug: 'throat-comfort-pops',
    name: 'Throat Comfort Pops',
    eyebrow: 'Honey + Tulsi • Ages 2+',
    tagline: 'Comforting flavour for scratchy-day moments.',
    price: 330,
    compareAt: 349,
    rating: 4.8,
    reviews: 147,
    badge: 'Parent Favourite',
    image: '/product-image.png',
    bg: '#fffff2',
    accent: '#851fe0',
    packs: [
      { label: '15 Pops', price: 330 },
      { label: '30 Pops · Save 7%', price: 614 },
      { label: '45 Pops · Save 10%', price: 891 }
    ],
    bullets: ['Honey, tulsi & ginger', 'No artificial colours', 'Easy to carry', 'Comfort-first flavour'],
    short: 'A gentle, honey-forward pop designed for comforting everyday moments when little throats feel dry or scratchy.',
    ingredients: 'Honey, tulsi extract, ginger, amla, pectin, natural orange flavour.',
    whatItDoes: 'Offers a soothing sensory experience and helps make warm-care routines easier for kids.',
    use: 'Use occasionally as part of a normal food routine. Not a substitute for medical care.',
    seo: 'Honey, tulsi and ginger comfort pops for children ages 2+. Kid-friendly everyday wellness format.'
  },
  {
    id: 'immune-pops',
    slug: 'daily-immune-pops',
    name: 'Daily Immune Pops',
    eyebrow: 'Amla + Vitamin C • Ages 2+',
    tagline: 'Everyday nutrition support, minus the fuss.',
    price: 360,
    compareAt: 399,
    rating: 4.8,
    reviews: 83,
    badge: 'Daily Pick',
    image: '/product-image.png',
    bg: '#c9e616',
    accent: '#c9e616',
    packs: [
      { label: '15 Pops', price: 360 },
      { label: '30 Pops · Save 8%', price: 662 },
      { label: '45 Pops · Save 12%', price: 950 }
    ],
    bullets: ['Vitamin C + zinc', 'Amla & tulsi', 'No artificial colours', 'Simple daily format'],
    short: 'A delicious daily pop with vitamin C, zinc and botanicals selected for everyday nutritional support.',
    ingredients: 'Amla, vitamin C, zinc, tulsi, honey, pectin, natural berry flavour.',
    whatItDoes: 'Provides vitamin C and zinc as part of daily nutrition for growing kids.',
    use: '1 pop daily with food, or follow guidance from your paediatrician or nutrition professional.',
    seo: 'Daily vitamin C and zinc pops with amla and tulsi for kids ages 2+. Easy everyday nutrition support.'
  },
  {
    id: 'travel-pops',
    slug: 'travel-comfort-pops',
    name: 'Travel Comfort Pops',
    eyebrow: 'Ginger + Fennel • Ages 2+',
    tagline: 'A calmer travel-bag ritual for little explorers.',
    price: 349,
    compareAt: 369,
    rating: 4.7,
    reviews: 41,
    badge: 'Travel Hero',
    image: '/product-image.png',
    bg: '#fffff2',
    accent: '#851fe0',
    packs: [
      { label: '15 Pops', price: 349 },
      { label: '30 Pops · Save 8%', price: 642 },
      { label: '45 Pops · Save 12%', price: 922 }
    ],
    bullets: ['Ginger + fennel', 'Fresh mint note', 'Individually wrapped', 'Fits any travel pouch'],
    short: 'A compact ginger, fennel and mint pop made for travel-day routines and family adventures.',
    ingredients: 'Ginger, fennel, mint, honey, pectin, lemon flavour.',
    whatItDoes: 'Designed as a familiar sensory routine for journeys and changing schedules.',
    use: 'Use as a food product during travel. Seek medical advice for persistent nausea or symptoms.',
    seo: 'Kid-friendly ginger, fennel and mint travel pops for ages 2+. Convenient individually wrapped format.'
  }
]

export const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Best Sellers', to: '/shop#best' },
  { label: 'Why XYZ', to: '/about' },
  { label: 'FAQ', to: '/faq' }
]
