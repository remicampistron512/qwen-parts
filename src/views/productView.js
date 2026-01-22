// =============================
// Product View (Single Product Page)
// =============================
// This page displays one product based on the URL param /product/:id
// It shows: breadcrumb navigation + image + details + specs table + add to cart

import { PRODUCTS } from "../data/products";
import { Breadcrumbs } from "../ui/breadcrumbs";

/**
 * ProductView
 * Renders a single product details page based on a dynamic route param.
 *
 * Example route:
 *   /product/12  ->  ProductView({ id: "12" })
 *
 * @param {Object} params
 * @param {string} params.id - product ID extracted from the URL
 * @returns {string} HTML page for the product
 */
export function ProductView({ id }) {
    // Convert URL param to a number so it can match product.id (which is numeric)
    const productId = Number(id);

    // Find the product from the PRODUCTS list
    const product = PRODUCTS.find((p) => p.id === productId);

    // If product doesn't exist, return a friendly "not found" page
    if (!product) {
        return `
      <section class="py-5">
        <h1>Product not found</h1>
        <p class="text-muted">This product does not exist.</p>
        <a href="/" data-link class="btn btn-outline-primary">Back to Home</a>
      </section>
    `;
    }

    // Create a nicer category label for display (example: "motherboard" -> "Motherboard")
    const prettyCategory =
        product.category.charAt(0).toUpperCase() + product.category.slice(1);

    // Build the specification table rows dynamically from product.details object
    // Example: { socket: "AM4", chipset: "B550" } -> <tr><th>Socket</th><td>AM4</td></tr>
    const specsRows = product.details
        ? Object.entries(product.details)
            .map(([key, value]) => `
            <tr>
              <!-- Convert camelCase keys to readable labels -->
              <th class="text-capitalize">${key.replaceAll(/([A-Z])/g, " $1")}</th>
              <td>${value}</td>
            </tr>
        `)
            .join("")
        : `<tr><td colspan="2" class="text-muted">No specifications available.</td></tr>`;

    // Return the full product page HTML
    return `
    <!-- Breadcrumb navigation (Home > Category > Product) -->
    ${Breadcrumbs([
        { label: `<i class="bi bi-house-door me-1"></i> Home`, href: "/" },
        { label: prettyCategory, href: `/category/${product.category}` },
        { label: product.title, href: `/product/${product.id}` },
    ])}

    <section class="py-5">
      <!-- Back link to category -->
      <div class="mb-4">
        <a href="/category/${product.category}" data-link class="text-decoration-none">
          ← Back to ${product.category}
        </a>
      </div>

      <div class="row g-4">
        <!-- Product Image -->
        <div class="col-12 col-lg-6">
          <div class="card">
            <img src="${product.img}" class="card-img-top" alt="${product.title}">
          </div>
        </div>

        <!-- Product Info -->
        <div class="col-12 col-lg-6">
          <h1 class="mb-2">${product.title}</h1>

          <!-- Category label -->
          <p class="text-capitalize mb-3">${product.category}</p>

          <!-- Price -->
          <h3 class="fw-bold mb-3">${product.price.toFixed(2)} €</h3>

          <!-- Full description (fallback to short if long is missing) -->
          <p class="mb-4">${product.longDescription || product.shortDescription}</p>

          <!-- Add to cart button (handled by your global cart handler) -->
          <button class="btn btn-primary btn-lg add-to-cart" data-id="${product.id}">
            <i class="bi bi-cart"></i> Add to cart
          </button>
        </div>
      </div>

      <!-- Product Specifications Table -->
      <div class="mt-5">
        <h4 class="mb-3">Specifications</h4>

        <div class="table-responsive">
          <table class="table table-striped table-dark align-middle">
            <tbody>
              ${specsRows}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}
