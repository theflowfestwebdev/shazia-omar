import bookLinksData from "./book-links.json";

export type BookLink = {
  text: string;
  href: string;
};

export type BookLinkGroup = {
  label: string;
  links: BookLink[];
};

export type BookLinksMap = Record<string, { groups: BookLinkGroup[] }>;

export const bookLinks = bookLinksData as BookLinksMap;

export function getBookLinks(slug: string): BookLinkGroup[] {
  return bookLinks[slug]?.groups ?? [];
}
