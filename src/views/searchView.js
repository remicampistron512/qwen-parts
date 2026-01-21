import {PRODUCTS} from "../data/products";
import {renderProductsGrid} from "../ui/renderProductsGrid";

export function SearchView() {
    const params = new URLSearchParams(location.search);
    const query = (params.get("q") || "").trim();

    // If empty query, show a "type something" page
    if (!query) {
        return `
      <section class="py-5">
        <h4>Search</h4>
        <p class="text-muted">Type something to search products.</p>
      </section>
    `;
    }

    const q = query.toLowerCase();

    // Search by title, category, shortDescription, longDescription
    const results = PRODUCTS.filter((p) => {
        return (
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.shortDescription.toLowerCase().includes(q) ||
            (p.longDescription && p.longDescription.toLowerCase().includes(q))
        );
    });

    return `
    ${renderProductsGrid(`Results for "${query}"`, results)}
  `;
}
