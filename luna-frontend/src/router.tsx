import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import OurStory from "@/pages/OurStory";
import Contact from "@/pages/Contact";
import MainLayout from "@/layout/MainLayout";
import { ROUTES } from "@/lib/paths";
import { DetailsCoffee } from "@/features/coffees/DetailsCoffee";
import RegisterPage from "@/pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/Profilepage";

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

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.register,
  component: RegisterPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.login,
  component: LoginPage,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.profile,
  component: ProfilePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  shopRoute,
  ourStoryRoute,
  contactRoute,
  detailsCoffeeRoute,
  registerRoute,
  loginRoute,
  profileRoute,
]);

export const router = createRouter({
  routeTree,
});
