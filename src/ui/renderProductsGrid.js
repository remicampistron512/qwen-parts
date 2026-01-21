export function renderProductsGrid(title, products) {
    const cardsHTML = products
        .map(
            (p) => `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card h-100">

          <a href="/products/${p.id}" data-link>
            <img src="${p.img}" class="card-img-top" alt="${p.title}">
          </a>

          <div class="card-body d-flex flex-column">
            <a href="/products/${p.id}" data-link class="text-decoration-none">
              <h5 class="card-title">${p.title}</h5>
            </a>

            <p class="card-text text-white">${p.shortDescription}</p>

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
      <h4 class="mb-4">${title}</h4>
      <div class="row g-4">
        ${cardsHTML || `<p class="text-muted">No products found.</p>`}
      </div>
    </section>
  `;
}
