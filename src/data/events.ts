export type EventItem = {
  id: string;
  title: string;
  date?: string;
  time?: string;
  venue?: string;
  venueDetail?: string;
  type?: string;
  cta?: string;
  ctaLink?: string;
  order?: number;
  description?: string;
};

export const events: EventItem[] = [
  {
    id: "belgian-pavilion",
    title: "Belgian Pavilion",
    date: "24 – 26 March 2026",
    time: "10:00 – 17:00 Daily",
    venue: "Landmark Event Centre,",
    venueDetail: "Victoria Island, Lagos",
    type: "pavilion",
    cta: "Register interest",
    ctaLink: "#register",
    order: 1,
    description:
      "Visit the Belgian Pavilion at Agrofood Nigeria 2026 to discover premium agrofood products and innovations from Flanders. Meet six leading Belgian companies and explore partnership opportunities.",
  },
];
