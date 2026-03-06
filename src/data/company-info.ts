export type Company = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  location?: string;
  short?: string;
  products?: string[];
  bodyHtml?: string;
  order?: number;
};

export const companies: Company[] = [
  {
    id: "bio-dp",
    name: "Bio DP",
    slug: "bio-dp",
    logo: "biodp.png",
    short:
      "Innovative Belgian biotech company specialising in sustainable biological crop protection and plant health solutions.",
    products: [
      "Biological crop protection",
      "Plant health solutions",
      "Sustainable agriculture inputs",
      "Bio-stimulants",
    ],
    order: 1,
    bodyHtml: `<p>Bio DP is a Flanders-based biotechnology company developing cutting-edge biological crop protection solutions. Their products help farmers transition to more sustainable farming practices while maintaining high productivity and crop quality.</p>`,
  },
  {
    id: "belgian-pork-group",
    name: "Belgian Pork Group (BPG)",
    slug: "belgian-pork-group",
    logo: "belgian_pork_group.png",
    short:
      "Leading Belgian pork producer delivering premium quality pork products to international markets with full supply chain traceability.",
    products: [
      "Premium pork products",
      "Processed meat solutions",
      "Chilled & frozen pork cuts",
      "Supply chain traceability systems",
    ],
    order: 2,
    bodyHtml: `<p>Belgian Pork Group (BPG) is one of Belgium's foremost pork producers, renowned for premium quality and rigorous food safety standards. BPG supplies a full range of pork products to discerning international markets, backed by complete farm-to-fork traceability.</p>`,
  },
  {
    id: "crops-fruit",
    name: "Crop's Fruit",
    slug: "crops-fruit",
    logo: "crop's.png",
    short:
      "Belgian leader in frozen fruit and vegetable solutions, supplying high-quality IQF products for food service and retail worldwide.",
    products: [
      "IQF frozen fruits",
      "Frozen vegetable mixes",
      "Fruit purées & coulis",
      "Food service solutions",
    ],
    order: 3,
    bodyHtml: `<p>Crop's Fruit, based in Flanders, is a market leader in individually quick-frozen (IQF) fruits and vegetables. They supply premium frozen produce to food service, retail, and industrial customers across the globe, with a commitment to quality and sustainability.</p>`,
  },
  {
    id: "mercordi-animal-care",
    name: "Mercordi Animal Care",
    slug: "mercordi-animal-care",
    logo: "mercordi.png",
    short:
      "Belgian specialist in animal health and nutrition, providing innovative feed additives and veterinary care solutions.",
    products: [
      "Animal feed additives",
      "Veterinary care products",
      "Livestock nutrition solutions",
      "Animal health consultancy",
    ],
    order: 4,
    bodyHtml: `<p>Mercordi Animal Care is a Belgian company dedicated to improving animal health and productivity through innovative nutritional solutions and veterinary products. Their expertise supports livestock farmers in achieving optimal animal welfare and performance.</p>`,
  },
  {
    id: "michiels-fabrieken",
    name: "Michiels Fabrieken",
    slug: "michiels-fabrieken",
    logo: "michiels.png",
    short:
      "Established Belgian manufacturer of high-quality animal feeds and agricultural processing equipment since 1896.",
    products: [
      "Animal feed production",
      "Feed processing equipment",
      "Agricultural machinery",
      "Custom feed formulations",
    ],
    order: 5,
    bodyHtml: `<p>Michiels Fabrieken, a long-established Belgian manufacturer, produces premium animal feeds and advanced agricultural processing equipment. With over a century of expertise, they deliver reliable solutions that support modern farming operations worldwide.</p>`,
  },
  {
    id: "fam-stumabo",
    name: "Fam Stumabo",
    slug: "fam-stumabo",
    logo: "fam_stumabo.png",
    short:
      "Belgian precision engineering firm specialising in industrial cutting and slicing machinery for the food processing industry.",
    products: [
      "Industrial cutting machinery",
      "Food slicing equipment",
      "Precision blades & tooling",
      "Custom processing solutions",
    ],
    order: 6,
    bodyHtml: `<p>Fam Stumabo is a Belgian precision engineering company renowned for its world-class industrial cutting and slicing machinery. Serving the global food processing industry, they deliver innovative, high-performance equipment designed for efficiency and reliability.</p>`,
  },
];
