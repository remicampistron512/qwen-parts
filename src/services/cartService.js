const CART_KEY = "cart_v1";

/** Load cart from LocalStorage */
export function loadCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) ?? [];
    } catch {
        return [];
    }
}

/** Save cart to LocalStorage */
export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/** Returns the total number of items in the cart (sum of all quantities) */
export function getCartCount() {
    return loadCart().reduce((sum, item) => sum + item.quantity, 0);
}

/** Adds a product to the cart (increment quantity if exists, else create new entry) */
export function addToCart(productId) {
    const cart = loadCart();
    const item = cart.find((i) => i.id === productId);

    if (item) item.quantity += 1;
    else cart.push({ id: productId, quantity: 1 });

    saveCart(cart);
}

/** Decreases quantity by 1, removing product if quantity reaches 0 */
export function decreaseFromCart(productId) {
    let cart = loadCart();

    cart = cart
        .map((i) => (i.id === productId ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0);

    saveCart(cart);
}

/** Completely removes a product from the cart */
export function removeFromCart(productId) {
    const cart = loadCart().filter((i) => i.id !== productId);
    saveCart(cart);
}

/** Clears the whole cart */
export function clearCart() {
    saveCart([]);
}
