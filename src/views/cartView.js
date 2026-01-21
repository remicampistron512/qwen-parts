import { loadCart } from "../services/cartService.js";
import { PRODUCTS } from "../data/products.js";

/** Renders the cart page by combining LocalStorage cart + product details */
export function CartView() {
    const cart = loadCart();

    const items = cart
        .map((ci) => {
            const product = PRODUCTS.find((p) => p.id === ci.id);
            if (!product) return null;

            return {
                ...product,
                quantity: ci.quantity,
                total: product.price * ci.quantity,
            };
        })
        .filter(Boolean);

    const totalAmount = items.reduce((sum, p) => sum + p.total, 0);

    return `
    <section class="py-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="mb-0">Your Cart</h4>
        ${items.length ? `<button class="btn btn-outline-danger btn-sm cart-clear">Clear cart</button>` : ""}
      </div>

      ${
        items.length === 0
            ? `<p>Your cart is empty.</p>`
            : `
            <div class="list-group mb-4">
              ${items
                .map(
                    (p) => `
                <div class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div class="container">
                <div class="row">
                  <div class=" col-md-7">
                    <img src="${p.img}" alt="${p.title}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;">
                    <div>
                      <div class="fw-bold">${p.title}</div>
                      <div class="text-muted small">${p.price.toFixed(2)} €</div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <button class="btn btn-sm btn-outline-secondary cart-dec" data-id="${p.id}">-</button>
                    <span class="px-2">${p.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary cart-inc" data-id="${p.id}">+</button>
                  </div>

                  <div class="col-md-1 fw-bold">${p.total.toFixed(2)} €
                  </div>
                   <div class="col-md-1">
                  <button class="btn btn-sm btn-outline-danger cart-remove" data-id="${p.id}">
                    Remove
                  </button>
                  </div>
                </div>
                </div>
                </div>
              `
                )
                .join("")}
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <div class="fw-bold fs-5">Total: ${totalAmount.toFixed(2)} €</div>
              <button class="btn btn-primary">Checkout</button>
            </div>
          `
    }
    </section>
  `;
}
