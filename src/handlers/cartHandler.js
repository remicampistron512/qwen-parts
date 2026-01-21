import {
    addToCart,
    decreaseFromCart,
    removeFromCart,
    clearCart,
} from "../services/cartService.js";

import { updateCartBadge } from "../ui/cartBadge.js";

/**
 * Sets up cart event handling using event delegation.
 * This is required because product cards and cart UI are rendered dynamically (SPA).
 *
 * Supported actions:
 * - Add product to cart from product cards
 * - Increase quantity in cart
 * - Decrease quantity in cart
 * - Remove item from cart
 * - Clear entire cart
 *
 * @param {Function} render - A function that re-renders the current page (router.render)
 */
export function setupCartHandler(render) {
    // Attach one global click listener to handle all cart-related buttons
    document.addEventListener("click", (e) => {
        // =============================
        // 1) Add to cart (from product cards / product page)
        // =============================
        const addBtn = e.target.closest(".add-to-cart");
        if (addBtn) {
            // Get product id from the button's data-id attribute
            addToCart(Number(addBtn.dataset.id));

            // Update the cart badge in the navbar
            updateCartBadge();
            return;
        }

        // =============================
        // 2) Increase quantity (cart page)
        // =============================
        const incBtn = e.target.closest(".cart-inc");
        if (incBtn) {
            addToCart(Number(incBtn.dataset.id));

            // Re-render the cart view to display the new quantity and total
            render();
            return;
        }

        // =============================
        // 3) Decrease quantity (cart page)
        // =============================
        const decBtn = e.target.closest(".cart-dec");
        if (decBtn) {
            decreaseFromCart(Number(decBtn.dataset.id));

            // Re-render the cart view to reflect the updated quantity
            render();
            return;
        }

        // =============================
        // 4) Remove product entirely (cart page)
        // =============================
        const removeBtn = e.target.closest(".cart-remove");
        if (removeBtn) {
            removeFromCart(Number(removeBtn.dataset.id));

            // Re-render to remove the item from the UI
            render();
            return;
        }

        // =============================
        // 5) Clear entire cart (cart page)
        // =============================
        const clearBtn = e.target.closest(".cart-clear");
        if (clearBtn) {
            clearCart();

            // Re-render to show the empty cart state
            render();
            return;
        }
    });
}
