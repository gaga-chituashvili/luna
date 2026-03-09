export const ROUTES = {
  home: "/",
  ourStory: "/our-story",
  shop: "/shop",
  contact: "/contact",
} as const;

export type RoutePaths = (typeof ROUTES)[keyof typeof ROUTES];
