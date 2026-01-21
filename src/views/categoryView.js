import { PRODUCTS } from "../data/products.js";
import { renderCategory } from "../ui/renderCategory.js";

/** Renders a category page (/category/:name) */
export function CategoryView({ name }) {
    const filtered = PRODUCTS.filter((p) => p.category === name);
    return renderCategory(name, filtered);
}
