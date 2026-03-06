export type FAQ = {
  id: string;
  q: string;
  aHtml: string;
  order?: number;
};

export const faqs: FAQ[] = [
  {
    id: "what-is-pavilion",
    q: "What is the Belgian Pavilion at Agrofood Nigeria?",
    order: 1,
    aHtml: `<p>The Belgian Pavilion is organised by Flanders Investment &amp; Trade (FIT) and showcases six leading Belgian agrofood companies at the Agrofood Nigeria 2026 event. Visitors can explore premium food products, agricultural technologies, and innovative processing solutions from Flanders.</p>`,
  },
  {
    id: "how-to-visit",
    q: "How can I register interest or visit the Belgian Pavilion?",
    order: 2,
    aHtml: `<p>Click the &ldquo;Register interest&rdquo; button on this page to express your interest in visiting the Belgian Pavilion. You will receive event details and logistics information to help you plan your visit to the Landmark Event Centre on 24&ndash;26 March 2026.</p>`,
  },
  {
    id: "who-can-attend",
    q: "Who can attend the Belgian Pavilion?",
    order: 3,
    aHtml: `<p>The Belgian Pavilion welcomes Nigerian and West African agrofood professionals, including importers, distributors, retailers, food service operators, and government officials. The Agrofood Nigeria exhibition is open to all trade visitors.</p>`,
  },
  {
    id: "product-types",
    q: "What types of products and services will be showcased?",
    order: 4,
    aHtml: `<p>Belgian companies will present a diverse range of products including premium pork, frozen fruits &amp; vegetables, biological crop protection, animal health solutions, feed production equipment, and industrial food processing machinery.</p>`,
  },
  {
    id: "what-is-fit",
    q: "What is Flanders Investment & Trade (FIT)?",
    order: 5,
    aHtml: `<p>Flanders Investment &amp; Trade (FIT) is the Flemish government agency that supports international business. FIT helps Flemish companies expand globally and attracts foreign investors to Flanders, Belgium. They organise trade missions and pavilions at major international events.</p>`,
  },
  {
    id: "event-location",
    q: "Where and when does the event take place?",
    order: 6,
    aHtml: `<p>Agrofood Nigeria 2026 takes place from 24 to 26 March 2026 at the Landmark Event Centre, Victoria Island, Lagos. The Belgian Pavilion is open daily from 10:00 to 17:00. No separate registration is needed for the exhibition—simply visit the pavilion area during event hours.</p>`,
  },
];
