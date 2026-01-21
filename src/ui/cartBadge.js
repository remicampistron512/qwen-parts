import { getCartCount } from "../services/cartService.js";

/**
 * Updates the cart badge (example: #cart-count in your navbar).
 * If badge does not exist, function does nothing.
 */
export function updateCartBadge() {
    const badge = document.querySelector("#cart-count");
    if (!badge) return;

    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-block" : "none";
}
