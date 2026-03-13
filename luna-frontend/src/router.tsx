import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { OurStory } from "./pages/OurStory";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import { ROUTES } from "./routes/paths";
import { DetailsCoffee } from "./component/Details/DetailsCoffee";
import { Log } from "./pages/Log";

const rootRoute = createRootRoute({
  component: MainLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.home,
  component: Home,
});

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.shop,
  component: Shop,
});
const ourStoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.ourStory,
  component: OurStory,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.contact,
  component: Contact,
});

const detailsCoffeeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.detail,
  component: DetailsCoffee,
});

const logRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.log,
  component: Log,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  shopRoute,
  ourStoryRoute,
  contactRoute,
  detailsCoffeeRoute,
  logRoute
]);

export const router = createRouter({
  routeTree,
});
