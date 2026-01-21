import { HomeView } from "../views/homeView.js";
import { CategoryView } from "../views/categoryView.js";
import { CartView } from "../views/cartView.js";
import {ProductView} from "../views/productView";


export const routes = [
    { path: "/", view: HomeView },
    { path: "/category/:name", view: CategoryView },
    { path: "/cart", view: CartView },
    { path: "/products/:id", view: ProductView}
];
