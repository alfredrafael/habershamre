type SiteConfig = {
  site_domain: string;
  site_name: string;
  site_description: string;
  site_tagline: string;
  site_keywords: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  og_image: string;
};

export const siteConfig: SiteConfig = {
  site_name: "Habersham Real Estate",
  site_description: "Real Estate Services",
  site_tagline: "",
  site_domain: "https://habershamre.com",
  site_keywords: [
    "Habersham Real Estate",
    "Richard Habersham",
    "Sarasota real estate",
    "Sarasota luxury homes",
    "Sarasota real estate broker",
    "Sarasota home buying",
    "Sarasota seasonal rentals",
    "Sarasota long-term rentals",
    "Sarasota investment properties",
    "Sarasota second homes",
    "Sarasota new developments",
    "Florida real estate",
    "New York real estate",
    "Manhattan residential real estate",
    "commercial real estate",
    "real estate market analysis",
  ],
  social: {
    twitter: "@HabershamRE",
    linkedin: "company/habersham-real-estate",
    instagram: "@habershamre",
  },
  og_image:
    "http://www.alfredorafael.com/wp-content/uploads/2026/09/sarasota-ribbon-e1789149843923.jpg",
};
