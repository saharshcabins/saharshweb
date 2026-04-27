// src/data/productData.ts

export interface ProductAmenity {
  icon: string; // emoji or icon name
  label: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductHighlight {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;

  // Gallery images — first image is the hero "cover", rest fill the grid
  images: string[];

  // Meta badges shown below the grid (like Airbnb)
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;

  // Feature circles (kept from original design)
  features: string[];

  // Amenities list
  amenities: ProductAmenity[];

  // Specs table
  specs: ProductSpec[];

  // Highlight cards
  highlights: ProductHighlight[];

  // CTA
  ctaLabel: string;
  ctaHref: string;

  // Price display (optional)
  priceLabel?: string;
}

// export const products: Product[] = [
//   {
//     slug: "forest-cabin",
//     name: "Forest Cabin",
//     tagline: "Luxury Prefab · Forest Retreat",
//     description: "A handcrafted prefab cabin designed to dissolve into the treeline.",
//     longDescription:
//       "Nestled beneath a canopy of ancient deodar and oak, the Forest Cabin redefines what it means to live in nature without sacrificing luxury. Every surface has been considered — from the floor-to-ceiling glazing that frames mountain silhouettes to the hand-oiled teak joinery that warms every corner. Built off-site and installed in weeks, not months.",
//     // images: [
//     //   "/assets/products/forest-cabin/hero.jpg",
//     //   "/assets/products/forest-cabin/interior-1.jpg",
//     //   "/assets/products/forest-cabin/interior-2.jpg",
//     //   "/assets/products/forest-cabin/exterior-1.jpg",
//     //   "/assets/products/forest-cabin/bedroom.jpg",
//     // ],
//     images: [
//   "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
//   "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
//   "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
//   "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
//   "https://images.unsplash.com/photo-1501183638710-841dd1904471",
// ],
//     guests: 4,
//     bedrooms: 2,
//     beds: 3,
//     bathrooms: 2,
//     features: ["Solar Ready", "Rainwater", "Off-Grid", "Modular"],
//     amenities: [
//       { icon: "🌿", label: "Forest View" },
//       { icon: "☀️", label: "Solar Power" },
//       { icon: "🪵", label: "Wood Fireplace" },
//       { icon: "🛁", label: "Soaking Tub" },
//       { icon: "📶", label: "Starlink Ready" },
//       { icon: "🚿", label: "Hot Shower" },
//       { icon: "❄️", label: "Climate Control" },
//       { icon: "🍳", label: "Full Kitchen" },
//     ],
//     specs: [
//       { label: "Total Area", value: "850 sq ft" },
//       { label: "Build Time", value: "8–12 weeks" },
//       { label: "Structure", value: "Steel + CLT" },
//       { label: "Insulation", value: "R-40 Rating" },
//       { label: "Glazing", value: "Triple Pane" },
//       { label: "Warranty", value: "10 Years" },
//     ],
//     highlights: [
//       {
//         title: "Arrives Ready",
//         description:
//           "Each cabin is 90% complete at our facility. Installation on-site takes as little as 72 hours.",
//       },
//       {
//         title: "Fully Customisable",
//         description:
//           "Choose your exterior cladding, interior finishes, and layout configuration to match your vision.",
//       },
//       {
//         title: "Built to Last",
//         description:
//           "Engineered for extreme climates — from Himalayan winters to coastal monsoons across India.",
//       },
//     ],
//     ctaLabel: "Request a Quote",
//     ctaHref: "/contact",
//     priceLabel: "Starting ₹48L",
//   },
//   {
//     slug: "mountain-villa",
//     name: "Mountain Villa",
//     tagline: "Luxury Prefab · Alpine Living",
//     description: "Expansive alpine living with panoramic ridge views.",
//     longDescription:
//       "The Mountain Villa commands its ridge with floor-to-ceiling glazing on three sides and a roofline designed to shed Himalayan snowfall effortlessly. Inside, warm materials — raw concrete, cured walnut, brushed brass — create an atmosphere of grounded luxury. A generous deck extends living outdoors for nine months of the year.",
//     // images: [
//     //   "/assets/products/mountain-villa/hero.jpg",
//     //   "/assets/products/mountain-villa/living.jpg",
//     //   "/assets/products/mountain-villa/exterior.jpg",
//     //   "/assets/products/mountain-villa/bedroom.jpg",
//     //   "/assets/products/mountain-villa/deck.jpg",
//     // ],
//     images: [
//   "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//   "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
//   "https://images.unsplash.com/photo-1505692794403-35f6f0f8c9c7",
//   "https://images.unsplash.com/photo-1472220625704-91e1462799b2",
// ],
//     guests: 6,
//     bedrooms: 3,
//     beds: 4,
//     bathrooms: 3,
//     features: ["Panoramic", "Snow-Proof", "Heated Floor", "Smart Home"],
//     amenities: [
//       { icon: "⛰️", label: "Mountain View" },
//       { icon: "🔥", label: "Radiant Heat" },
//       { icon: "🛋️", label: "Open Living" },
//       { icon: "🍷", label: "Wine Cellar" },
//       { icon: "📱", label: "Smart Controls" },
//       { icon: "🏔️", label: "Roof Deck" },
//       { icon: "🚗", label: "Parking" },
//       { icon: "🌡️", label: "Year-Round" },
//     ],
//     specs: [
//       { label: "Total Area", value: "1,400 sq ft" },
//       { label: "Build Time", value: "10–14 weeks" },
//       { label: "Structure", value: "Steel Frame" },
//       { label: "Insulation", value: "R-60 Rating" },
//       { label: "Glazing", value: "Triple Pane, Low-E" },
//       { label: "Warranty", value: "10 Years" },
//     ],
//     highlights: [
//       {
//         title: "Snow Engineering",
//         description:
//           "Roof pitch and load ratings tested for 400 kg/m² snow accumulation in high-altitude conditions.",
//       },
//       {
//         title: "Passive Solar Design",
//         description:
//           "South-facing glazing and thermal mass reduce heating costs by up to 60% in winter months.",
//       },
//       {
//         title: "Turnkey Delivery",
//         description:
//           "We manage permits, site prep, transport logistics, and installation — you move in ready.",
//       },
//     ],
//     ctaLabel: "Request a Quote",
//     ctaHref: "/contact",
//     priceLabel: "Starting ₹85L",
//   },
//   {
//     slug: "portable-cafe",
//     name: "Portable Café",
//     tagline: "Commercial Prefab · Hospitality Unit",
//     description: "A fully-equipped café that sets up in hours, anywhere.",
//     longDescription:
//       "The Saharsh Portable Café is engineered for hospitality entrepreneurs who want a premium space without permanent construction. Ship it to a vineyard, a hillstation, a beach. Each unit arrives with a full commercial kitchen, barista station, and seating for 20. Relocate it whenever your vision evolves.",
//     // images: [
//     //   "/assets/products/portable-cafe/hero.jpg",
//     //   "/assets/products/portable-cafe/interior.jpg",
//     //   "/assets/products/portable-cafe/counter.jpg",
//     //   "/assets/products/portable-cafe/exterior.jpg",
//     //   "/assets/products/portable-cafe/detail.jpg",
//     // ],
//     images: [
//   "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
//   "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
//   "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
//   "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
//   "https://images.unsplash.com/photo-1511920170033-f8396924c348",
// ],
//     guests: 20,
//     bedrooms: 0,
//     beds: 0,
//     bathrooms: 1,
//     features: ["Relocatable", "Commercial", "24hr Setup", "Grid-Ready"],
//     amenities: [
//       { icon: "☕", label: "Barista Station" },
//       { icon: "🍽️", label: "Commercial Kitchen" },
//       { icon: "💡", label: "LED Lighting" },
//       { icon: "❄️", label: "HVAC" },
//       { icon: "🔌", label: "3-Phase Power" },
//       { icon: "🪑", label: "Seating for 20" },
//       { icon: "🚿", label: "Staff Bathroom" },
//       { icon: "🔒", label: "Security Shutter" },
//     ],
//     specs: [
//       { label: "Total Area", value: "600 sq ft" },
//       { label: "Setup Time", value: "24–48 hours" },
//       { label: "Container", value: "40ft HC ISO" },
//       { label: "Power", value: "3-Phase / Solar" },
//       { label: "Certification", value: "FSSAI Ready" },
//       { label: "Warranty", value: "5 Years" },
//     ],
//     highlights: [
//       {
//         title: "Fully Relocatable",
//         description:
//           "Standard ISO container footprint means transport via flatbed truck — no special permits required.",
//       },
//       {
//         title: "Commercial Grade",
//         description:
//           "Equipped with a four-burner range, undercounter fridge, and dishwasher as standard.",
//       },
//       {
//         title: "Brand-Ready",
//         description:
//           "Exterior cladding, signage zones, and colour palette matched to your brand identity.",
//       },
//     ],
//     ctaLabel: "Get Started",
//     ctaHref: "/contact",
//     priceLabel: "Starting ₹22L",
//   },
// ];


export const products: Product[] = [
  {
    slug: "forest-escape",
    name: "Forest Escape",
    tagline: "Luxury Prefab · Off-grid Cabin",
    description: "Compact off-grid luxury for remote landscapes.",
    longDescription:
      "Forest Escape is designed for minimal footprint living in remote terrains. With solar integration, water harvesting, and modular construction, it offers independence without compromising comfort.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    features: ["Off-Grid", "Solar", "Compact"],
    amenities: [
      { icon: "🌿", label: "Forest View" },
      { icon: "☀️", label: "Solar Powered" },
    ],
    specs: [
      { label: "Area", value: "420 sq ft" },
      { label: "Build Time", value: "6 weeks" },
    ],
    highlights: [
      {
        title: "Remote Ready",
        description: "Designed for hard-to-access locations.",
      },
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    priceLabel: "Starting ₹28L",
  },

  {
    slug: "forest-cabin",
    name: "Forest Cabin",
    tagline: "Luxury Prefab · Forest Retreat",
    description: "A handcrafted prefab cabin in nature.",
    longDescription:
      "Blends seamlessly into the forest with premium materials and expansive glazing.",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    features: ["Solar Ready", "Off-Grid"],
    amenities: [{ icon: "🌲", label: "Forest View" }],
    specs: [{ label: "Area", value: "850 sq ft" }],
    highlights: [{ title: "Premium Build", description: "Built to last." }],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    priceLabel: "Starting ₹48L",
  },

  {
    slug: "mountain-villa",
    name: "Mountain Villa",
    tagline: "Luxury Prefab · Alpine Living",
    description: "Panoramic villa with ridge views.",
    longDescription:
      "Engineered for high-altitude living with large decks and glass façades.",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    ],
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    features: ["Panoramic", "Smart Home"],
    amenities: [{ icon: "⛰️", label: "Mountain View" }],
    specs: [{ label: "Area", value: "1400 sq ft" }],
    highlights: [{ title: "High Altitude Ready", description: "Snow safe." }],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    priceLabel: "Starting ₹85L",
  },

  {
    slug: "hillside-retreat",
    name: "Hillside Retreat",
    tagline: "Luxury Prefab · Sloped Living",
    description: "Designed for steep terrains.",
    longDescription:
      "A cantilevered structure perfect for hillside plots with panoramic views.",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    ],
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    features: ["Cantilever", "Steel Frame"],
    amenities: [{ icon: "🌄", label: "Valley View" }],
    specs: [{ label: "Area", value: "980 sq ft" }],
    highlights: [{ title: "Slope Optimized", description: "Built for terrain." }],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    priceLabel: "Starting ₹62L",
  },

  {
    slug: "lakeside-studio",
    name: "Lakeside Studio",
    tagline: "Luxury Prefab · Waterfront",
    description: "Compact studio with lake view.",
    longDescription:
      "A minimal yet luxurious space designed around uninterrupted water views.",
    images: [
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2",
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    features: ["Waterfront"],
    amenities: [{ icon: "🌊", label: "Lake View" }],
    specs: [{ label: "Area", value: "320 sq ft" }],
    highlights: [{ title: "Minimal Living", description: "Efficient design." }],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    priceLabel: "Starting ₹22L",
  },

  {
    slug: "resort-cluster",
    name: "Resort Cluster",
    tagline: "Hospitality · Multi-unit",
    description: "Scalable resort solution.",
    longDescription:
      "Deploy multiple prefab units quickly for hospitality businesses.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    features: ["Scalable"],
    amenities: [{ icon: "🏨", label: "Hospitality Ready" }],
    specs: [{ label: "Area", value: "480 sq ft" }],
    highlights: [{ title: "Rapid Deployment", description: "Fast setup." }],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    priceLabel: "Starting ₹1.8Cr",
  },

  {
    slug: "portable-cafe",
    name: "Portable Café",
    tagline: "Commercial Prefab",
    description: "Fully-equipped mobile café.",
    longDescription:
      "A relocatable café unit designed for entrepreneurs.",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    ],
    guests: 20,
    bedrooms: 0,
    beds: 0,
    bathrooms: 1,
    features: ["Commercial"],
    amenities: [{ icon: "☕", label: "Barista Station" }],
    specs: [{ label: "Area", value: "600 sq ft" }],
    highlights: [{ title: "Portable", description: "Move anywhere." }],
    ctaLabel: "Get Started",
    ctaHref: "/contact",
    priceLabel: "Starting ₹22L",
  },

  {
    slug: "sales-office",
    name: "Sales Office",
    tagline: "Commercial Prefab Office",
    description: "Quick deploy office unit.",
    longDescription:
      "A premium prefab office for real estate and on-site operations.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
    ],
    guests: 10,
    bedrooms: 0,
    beds: 0,
    bathrooms: 1,
    features: ["Commercial"],
    amenities: [{ icon: "🏢", label: "Office Space" }],
    specs: [{ label: "Area", value: "280 sq ft" }],
    highlights: [{ title: "Quick Setup", description: "48hr deployment." }],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    priceLabel: "Starting ₹12L",
  },
];