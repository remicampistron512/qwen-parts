import {
    addToCart,
    decreaseFromCart,
    removeFromCart,
    clearCart,
} from "../services/cartService.js";

import { updateCartBadge } from "../ui/cartBadge.js";

/**
 * Handles cart buttons using event delegation:
 * - Add to cart from product cards
 * - +/- in cart
 * - remove item
 * - clear cart
 */
export function setupCartHandler(render) {
    document.addEventListener("click", (e) => {
        const addBtn = e.target.closest(".add-to-cart");
        if (addBtn) {
            addToCart(Number(addBtn.dataset.id));
            updateCartBadge();
            return;
        }

        const incBtn = e.target.closest(".cart-inc");
        if (incBtn) {
            addToCart(Number(incBtn.dataset.id));
            render();
            return;
        }

        const decBtn = e.target.closest(".cart-dec");
        if (decBtn) {
            decreaseFromCart(Number(decBtn.dataset.id));
            render();
            return;
        }

        const removeBtn = e.target.closest(".cart-remove");
        if (removeBtn) {
            removeFromCart(Number(removeBtn.dataset.id));
            render();
            return;
        }

        const clearBtn = e.target.closest(".cart-clear");
        if (clearBtn) {
            clearCart();
            render();
            return;
        }
    });
}
