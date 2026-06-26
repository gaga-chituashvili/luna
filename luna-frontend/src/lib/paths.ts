export const ROUTES = {
  home: "/",
  ourStory: "/our-story",
  shop: "/shop",
  contact: "/contact",
  cart: "/cart",
  detail: "/shop/$coffeeId",
  register: "/register",
  login: "/login",
  profile: "/profile",
} as const;

export type RoutePaths = (typeof ROUTES)[keyof typeof ROUTES];
