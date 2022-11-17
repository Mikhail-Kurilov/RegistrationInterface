import { Authorization, Registration, Content, FortyFour } from "../pages";
import { CONTENT_ROUTE, FORTY_FOUR_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./constants";

export const routes = [
  {
    path: LOGIN_ROUTE,
    Component: Authorization
  },

  {
    path: REGISTRATION_ROUTE,
    Component: Registration
  },

  {
    path: CONTENT_ROUTE,
    Component: Content
  },
  
  {
    path: FORTY_FOUR_ROUTE,
    Component: FortyFour
  }
]


