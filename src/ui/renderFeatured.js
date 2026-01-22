export function renderFeatured(products, count = 4) {
    if (!products || products.length === 0) {
        return `<p class="text-muted">No featured products available.</p>`;
    }


    const featured = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

    return `
    <div class="row g-4">
      ${featured
        .map(
            (p) => `
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card h-100 shadow-sm">
                <img 
                  src="${p.img ?? "img/placeholder.png"}"
                  class="card-img-top"
                  alt="${p.title}"
                  style="height: 180px; object-fit: cover;"
                />
                <div class="text-light card-body d-flex flex-column">
                <a href="/products/${p.id}" data-link>
                  <h6 class="card-title mb-1">${p.title}</h6>
                  <p class=" small mb-2">${p.category}</p>
                </a>
                  <div class="mt-auto d-flex justify-content-between align-items-center">
                    <strong>${p.price} €</strong>                    
                  </div>
                </div>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}
