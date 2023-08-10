import { login } from "./files/login";
import { menu } from "./files/menu";
import { navRoutes } from "./files/nav-routes";
import { register } from "./files/register";
import { socialMedia } from "./files/social-media";

export const content = [menu, navRoutes, register, login, socialMedia];

export const serverUrl = `http://localhost:3001`;
