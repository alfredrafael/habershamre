// Define the menu items
export type MenuDropdown = {
  href: string;
  items: { label: string; href: string }[];
};

export const mainMenu: Record<string, string | MenuDropdown> = {
  home: "/",
  Schedule: "/schedule",
};

export const contentMenu = {
  categories: "/posts/categories",
  tags: "/posts/tags",
  authors: "/posts/authors",
};
