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
    "architecture",
    "architectural design",
    "architects",
    "residential architecture",
    "commercial architecture",
    "building design",
    "construction",
    "architectural consulting",
    "modern architecture",
  ],
  social: {
    twitter: "@HabershamRE",
    linkedin: "company/habersham-real-estate",
    instagram: "@habershamre",
  },
  og_image:
    "http://www.alfredorafael.com/wp-content/uploads/2026/09/sarasota-ribbon-e1789149843923.jpg",
};
