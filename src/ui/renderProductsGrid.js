/**
 * Renders a responsive Bootstrap grid of product cards.
 * Used for category pages, search results, featured products, etc.
 *
 * Each card includes:
 * - Clickable image + title that navigate to the product page (SPA navigation)
 * - Short description
 * - Price
 * - "Add to cart" button (handled globally via event delegation)
 *
 * @param {string} title - Section title displayed above the grid
 * @param {Array<Object>} products - Array of product objects to display
 * @returns {string} HTML string for a full section containing the product grid
 */
export function renderProductsGrid(title, products) {
    // Convert each product into a Bootstrap card column
    const cardsHTML = products
        .map(
            (p) => `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card h-100">

          <!-- Image link: opens the product detail page using SPA navigation -->
          <a href="/products/${p.id}" data-link>
            <img src="${p.img}" class="card-img-top" alt="${p.title}">
          </a>

          <div class="card-body d-flex flex-column">
            
            <!-- Title link: also opens the product detail page -->
            <a href="/products/${p.id}" data-link class="text-decoration-none">
              <h5 class="card-title">${p.title}</h5>
            </a>

            <!-- Short description text -->
            <p class="card-text text-white">${p.shortDescription}</p>

            <!-- Push price + button to the bottom of the card -->
            <div class="mt-auto">
              <p class="fw-bold mb-2">${p.price.toFixed(2)} €</p>

              <!-- Add-to-cart button: handled by setupCartHandler via event delegation -->
              <button class="btn btn-primary w-100 add-to-cart" data-id="${p.id}">
                <i class="bi bi-cart"></i> Add to cart
              </button>
            </div>

          </div>
        </div>
      </div>
    `
        )
        .join(""); // Join all card columns into one HTML string

    // Return a full section with a title and product grid
    // If no products exist, show a friendly empty state message
    return `
    <section class="py-5">
      <h4 class="mb-4">${title}</h4>

      <div class="row g-4">
        ${cardsHTML || `<p class="text-muted">No products found.</p>`}
      </div>
    </section>
  `;
}
