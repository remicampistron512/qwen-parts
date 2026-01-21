import { HomeView } from "../views/homeView.js";
import { CategoryView } from "../views/categoryView.js";
import { CartView } from "../views/cartView.js";


export const routes = [
    { path: "/", view: HomeView },
    { path: "/category/:name", view: CategoryView },
    { path: "/cart", view: CartView },
    { path: "/users", view: UsersView },
];
