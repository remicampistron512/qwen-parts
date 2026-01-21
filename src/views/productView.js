// Displays a single product page (/product/:id) with full description + specs table
import {PRODUCTS} from "../data/products";

export function ProductView({ id }) {
    const productId = Number(id);
    const product = PRODUCTS.find((p) => p.id === productId);

    if (!product) {
        return `
      <section class="py-5">
        <h1>Product not found</h1>
        <p class="text-muted">This product does not exist.</p>
        <a href="/" data-link class="btn btn-outline-primary">Back to Home</a>
      </section>
    `;
    }

    // Convert details object into table rows automatically
    const specsRows = product.details
        ? Object.entries(product.details)
            .map(
                ([key, value]) => `
            <tr>
              <th class="text-capitalize">${key.replaceAll(/([A-Z])/g, " $1")}</th>
              <td>${value}</td>
            </tr>
          `
            )
            .join("")
        : `<tr><td colspan="2" class="text-muted">No specifications available.</td></tr>`;

    return `
    <section class="py-5">
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
          <p class="text-muted text-capitalize mb-3">${product.category}</p>

          <h3 class="fw-bold mb-3">${product.price.toFixed(2)} €</h3>

          <p class="mb-4">${product.longDescription || product.shortDescription}</p>

          <button class="btn btn-primary btn-lg add-to-cart" data-id="${product.id}">
            <i class="bi bi-cart"></i> Add to cart
          </button>
        </div>
      </div>

      <!-- Specifications -->
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
