const CART_KEY = "cart_v1";

/** Load cart from LocalStorage or return an empty array if not found */
export function loadCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) ?? [];
    } catch {
        return [];
    }
}

/** Save cart to LocalStorage by converting it to JSON string */
export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/** Returns the total number of items in the cart (sum of all quantities) using a reduce function.
 * The accumulator (sum) starts at 0 and is updated each time a new item is added. */
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

/** Decreases quantity by 1, removing product if quantity reaches 0.
 * It uses a map first to update quantities and then filters out items with 0 quantity. */
export function decreaseFromCart(productId) {
    let cart = loadCart();

    cart = cart
        .map((i) => (i.id === productId ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0);

    saveCart(cart);
}

/** Completely removes a product from the cart, using array filter.*/
export function removeFromCart(productId) {
    const cart = loadCart().filter((i) => i.id !== productId);
    saveCart(cart);
}

/** Clears the whole cart */
export function clearCart() {
    saveCart([]);
}
