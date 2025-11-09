export type Product = {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    buttons?: {
      text: string;
      isGrayout?: boolean;
    }[];
  };
  cabin: {
   description: string;
  features: string[];
  image?: string | null;
  };
  grid: {
    titleDark: string;
    titleHighlight: string;
    images: (string | null)[];
  };
  viewProduct: {
    titleDark: string;
    titleHighlight: string;
    description: string;
    buttonText: string;
    cards: (string | null)[];
  };
  images?: string[];
};

export const products: Product[] = [
  {
    slug: "hutsie",
    hero: {
      title: "Hutsie",
      subtitle: "20 x 40 ft | 1 Bathroom | 1 Bed | 1 Pantry",
      description:
        "From sleek architecture to luxurious interiors & scenic landscapes come together to create living spaces that inspire and rejuvenate.",
      backgroundImage: "/assets/product/hutsieHero.webp",
      buttons: [
        { text: "Schedule a Visit" },
        { text: "Bestseller", isGrayout: true },
      ],
    },
 cabin: {
  description:
    "Saharsh Cabins are utilizing high-quality materials and innovative construction techniques to ensure durability, efficiency, and elegance.",
  features: ["20 x 40 ft", "1 Bathroom", "1 Pantry", "1 Bedroom"],
  image: "/assets/cabin/cabin_1.webp",
},

    grid: {
      titleDark: "Spectacular",
      titleHighlight: "Interiors",
      images: [
        "/assets/product/interior_1.webp",
        "/assets/product/interior_2.webp",
        null,
        "/assets/product/interior_4.webp",
      ],
    },
    viewProduct: {
      titleDark: "View More",
      titleHighlight: "Cabins",
      description:
        "Saharsh Cabins are utilizing high-quality materials and innovative construction techniques to ensure durability, efficiency..",
      buttonText: "View All",
      cards: [
        "/assets/product/cabin_1.webp",
        "/assets/product/cabin_2.webp",
        null,
        null,
        "/assets/product/cabin_3.webp",
        "/assets/product/cabin_4.webp",
        "/assets/product/cabin_5.webp",
      ],
    },
    images: [
      "/assets/product/display_product.webp",
      "/assets/product/display_product_2.webp",
    ],
  },
  // Add more products here with different slugs
];
