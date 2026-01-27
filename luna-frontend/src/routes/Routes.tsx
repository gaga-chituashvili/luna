import {ROUTES} from "./paths"
import { Home } from "../pages/Home"
import { OurStory } from "../pages/OurStory"
import { Shop } from "../pages/Shop"
import {Contact} from "../pages/Contact"

export const RoutesConfig = [
    { path: ROUTES.home, element: <Home /> },
    { path: ROUTES.ourStory, element: <OurStory /> },
    { path: ROUTES.shop, element: <Shop /> },
    { path: ROUTES.contact, element: <Contact /> }
]

