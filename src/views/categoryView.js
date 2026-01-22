import { PRODUCTS } from "../data/products.js";
import { renderCategory } from "../ui/renderCategory.js";
import {Breadcrumbs} from "../ui/breadcrumbs";

/** Renders a category page (/category/:name) */
export function CategoryView({ name }) {

    const filtered = PRODUCTS.filter((p) => p.category === name);
    return `
    ${Breadcrumbs([
        { label: `<i class="bi bi-house-door me-1"></i>`, href: "/" },
        { label: name.charAt(0).toUpperCase() + name.slice(1), href: `/category/${name}` },
    ])}

    ${renderCategory(name, filtered)}
  `;
}
