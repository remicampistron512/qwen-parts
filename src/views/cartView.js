import { loadCart } from "../services/cartService.js";
import { PRODUCTS } from "../data/products.js";

/**
 * CartView
 * Renders the cart page by combining:
 * 1) Cart data stored in LocalStorage (only id + quantity)
 * 2) Product data from PRODUCTS (title, price, image, etc.)
 *
 * The final rendered cart supports:
 * - Increase / decrease quantity buttons
 * - Remove item button
 * - Clear cart button
 * - Total amount calculation
 */
export function CartView() {
    // Load raw cart from LocalStorage: [{ id: number, quantity: number }, ...]
    const cart = loadCart();

    // Merge each cart item with its full product information
    const items = cart
        .map((ci) => {
            // Find the product details based on cart item id
            const product = PRODUCTS.find((p) => p.id === ci.id);

            // If product doesn't exist anymore (removed from PRODUCTS), ignore it
            if (!product) return null;

            // Create a new object containing all product data + quantity + line total
            return {
                ...product,
                quantity: ci.quantity,
                total: product.price * ci.quantity,
            };
        })
        // Remove any null items returned above
        .filter(Boolean);

    // Calculate the total amount for the whole cart (sum of all line totals)
    const totalAmount = items.reduce((sum, p) => sum + p.total, 0);

    // Render the cart UI
    return `
    <section class="py-5">
      <!-- Header: title + clear cart button -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="mb-0">Your Cart</h4>

        <!-- Only show the "Clear cart" button if cart contains items -->
        ${
        items.length
            ? `<button class="btn btn-outline-danger btn-sm cart-clear">Clear cart</button>`
            : ""
    }
      </div>

      ${
        // If no items, show empty cart message
        items.length === 0
            ? `<p>Your cart is empty.</p>`
            : `
            <!-- Items list -->
            <div class="list-group mb-4">
              ${items
                .map(
                    (p) => `
                <!-- One cart item row -->
                <div class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <div class="container">
                    <div class="row">

                      <!-- Product image + product name -->
                      <div class="col-md-7">
                        <img 
                          src="${p.img}" 
                          alt="${p.title}" 
                          style="width:64px;height:64px;object-fit:cover;border-radius:8px;"
                        />
                        <div>
                          <div class="fw-bold">${p.title}</div>
                          <div class="text-muted small">${p.price.toFixed(2)} €</div>
                        </div>
                      </div>

                      <!-- Quantity controls (decrease / increase) -->
                      <div class="col-md-3">
                        <button class="btn btn-sm btn-outline-secondary cart-dec" data-id="${p.id}">-</button>
                        <span class="px-2">${p.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary cart-inc" data-id="${p.id}">+</button>
                      </div>

                      <!-- Line total price -->
                      <div class="col-md-1 fw-bold">
                        ${p.total.toFixed(2)} €
                      </div>

                      <!-- Remove product button -->
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

            <!-- Cart summary / footer -->
            <div class="d-flex justify-content-between align-items-center">
              <div class="fw-bold fs-5">Total: ${totalAmount.toFixed(2)} €</div>
              <button class="btn btn-primary">Checkout</button>
            </div>
          `
    }
    </section>
  `;
}
