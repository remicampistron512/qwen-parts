/**
 * Builds the product cards section for any category dynamically.
 */
export function renderCategory(categoryName, products) {
    const cardsHTML = products
        .map(
            (p) => `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card h-100">
          <img src="${p.img}" class="card-img-top" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.description}</p>

            <div class="mt-auto">
              <p class="fw-bold mb-2">${p.price.toFixed(2)} €</p>
              <button class="btn btn-primary w-100 add-to-cart" data-id="${p.id}">
                <i class="bi bi-cart"></i> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `
        )
        .join("");

    return `
    <section class="py-5">
      <h4 class="mb-4 text-capitalize">${categoryName}</h4>
      <div class="row g-4">
        ${cardsHTML || `<p class="text-muted">No products found.</p>`}
      </div>
    </section>
  `;
}
