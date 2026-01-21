// =============================
// Imports
// =============================

// Import custom SCSS (bundled by Vite/Webpack/etc.)
import "../scss/styles.scss";

// Import Bootstrap JS (required for carousel, dropdowns, etc.)
import * as bootstrap from "bootstrap";

// Import Bootstrap Icons CSS
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// =============================
// DOM References
// =============================

const app = document.querySelector("#main-content");       // Main outlet where pages are rendered
const mainContainer = document.querySelector("#main-container"); // Used to prevent FOUC (app-hidden)

// =============================
// Data (Products)
// =============================

const PRODUCTS = [
    {
        id: 1,
        category: "motherboard",
        title: "ASUS B550",
        description: "AM4 ATX motherboard with PCIe 4.0",
        price: 149.99,
        img: "img/motherboard.jpg",
    },
    {
        id: 2,
        category: "motherboard",
        title: "MSI B760",
        description: "Intel LGA1700 motherboard for 12th/13th gen",
        price: 169.99,
        img: "img/motherboard2.jpg",
    },
    {
        id: 3,
        category: "cpu",
        title: "Ryzen 7 5800X",
        description: "8 cores / 16 threads",
        price: 229.99,
        img: "img/ryzen-7.jpg",
    },
    {
        id: 4,
        category: "psu",
        title: "Corsair RM750",
        description: "750W Gold modular PSU",
        price: 119.99,
        img: "img/power-supply.jpg",
    },
];

// =============================
// Cart LocalStorage Service
// =============================
// We store cart as: [{ id: number, quantity: number }, ...]

const CART_KEY = "cart_v1";

function loadCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) ?? [];
    } catch {
        return [];
    }
}

// Save cart to localstorage
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Calculates the cart badge count by summing the quantity of each cart item
function getCartCount() {
    return loadCart().reduce((sum, item) => sum + item.quantity, 0);
}

// Loads the cart from LocalStorage, updates the quantity for the given productId, then saves it back
function addToCart(productId) {
    const cart = loadCart();
    const item = cart.find((i) => i.id === productId);

    if (item) item.quantity += 1;
    else cart.push({ id: productId, quantity: 1 });

    saveCart(cart);
}

// Loads the cart, subtracts 1 from the selected product's quantity, removes empty items, then saves the updated cart
function decreaseFromCart(productId) {
    let cart = loadCart();

    cart = cart
        // Update only the matching cart item by decreasing its quantity, leave all other items as they are
        .map((i) => (i.id === productId ? { ...i, quantity: i.quantity - 1 } : i))
        // Keep only cart items with a positive quantity
        .filter((i) => i.quantity > 0);

    saveCart(cart);
}
// Completely removes a product from the cart (regardless of its quantity) and saves the updated cart
function removeFromCart(productId) {
    // Keep only the items that do NOT match the selected productId (removes it from the cart)
    const cart = loadCart().filter((i) => i.id !== productId);
    saveCart(cart);
}

function clearCart() {
    saveCart([]);
}

// =============================
// UI Helpers
// =============================

/**
 * Updates the cart badge (example: #cart-count in your navbar).
 * If badge does not exist on page,function does nothing.
 */
function updateCartBadge() {
    const badge = document.querySelector("#cart-count");
    if (!badge) return;

    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-block" : "none";
}

/**
 * Builds the product cards section for any category dynamically.
 */
function renderCategory(categoryName, products) {
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

// =============================
// Views (Pages)
// =============================

function Home() {
    return `
    <section class="py-5">
      <div class="row align-items-center gy-4">
        <div class="col-12 col-lg-6">
          <h1 class="hero-title mb-0">Build a better pc</h1>
          <h5 class="fw-lighter">Premium components, verified compatibility, fast delivery</h5>
        </div>
        <div class="col-12 col-lg-6">
          <div class="img-placeholder">
            <img src="img/hero.png" alt="Hero image" />
          </div>
        </div>
      </div>
    </section>

    <h4 class="mb-5">Shop by category</h4>

    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <ul class="nav justify-content-around">

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/gpu" data-link>
                <i class="bi bi-gpu-card"></i>
                <span>GPU</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/cpu" data-link>
                <i class="bi bi-cpu"></i>
                <span>CPU</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/ram" data-link>
                <i class="bi bi-memory"></i>
                <span>RAM</span>
              </a>
            </li>

            <li class="nav-item">
              <!-- IMPORTANT: must include data-link for SPA navigation -->
              <a class="nav-link nav-icon-pill" href="/category/motherboard" data-link>
                <i class="bi bi-motherboard"></i>
                <span>Motherboard</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/storage" data-link>
                <i class="bi bi-database"></i>
                <span>Storage</span>
              </a>
            </li>

          </ul>
        </div>

        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>

        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
      </div>

      <button class="carousel-control-prev justify-content-lg-start" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next justify-content-lg-end" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
}

/**
 * Dynamic category page: /category/:name
 * Example: /category/motherboard
 */

// Renders a dynamic category page by filtering products by category name and generating the category HTML
function CategoryView({ name }) {
    const filtered = PRODUCTS.filter((p) => p.category === name);
    return renderCategory(name, filtered);
}

// Renders the cart page by combining cart data from LocalStorage with product details and displaying totals + actions
function CartView() {
    const cart = loadCart();

    // For each cart entry, find the matching product details, calculate line total, and filter out invalid entries
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
        // if the cart is empty, display a message else display the cart items
        items.length === 0
            ? `<p class="text-muted">Your cart is empty.</p>`
            : `
            <div class="list-group mb-4">
              ${items
                .map(
                    (p) => `
                <div class="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <div class="d-flex align-items-center gap-3">
                    <img src="${p.img}" alt="${p.title}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;">
                    <div>
                      <div class="fw-bold">${p.title}</div>
                      <div class="text-muted small">${p.price.toFixed(2)} €</div>
                    </div>
                  </div>

                  <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-outline-secondary cart-dec" data-id="${p.id}">-</button>
                    <span class="px-2">${p.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary cart-inc" data-id="${p.id}">+</button>
                  </div>

                  <div class="fw-bold">${p.total.toFixed(2)} €</div>

                  <button class="btn btn-sm btn-outline-danger cart-remove" data-id="${p.id}">
                    Remove
                  </button>
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

async function Users() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return `
    <h1>Users</h1>
    <ul>
      ${users.map((u) => `<li>${u.name}</li>`).join("")}
    </ul>
  `;
}

function NotFound() {
    return `
    <h1>404</h1>
    <p>Page not found.</p>
    <a href="/" data-link>Go Home</a>
  `;
}

// =============================
// Router (SPA)
// =============================

// Declare and initialize the routes array with route definitions
const routes = [
    { path: "/", view: Home },
    { path: "/category/:name", view: CategoryView },
    { path: "/cart", view: CartView },
    { path: "/users", view: Users },
];

/**
 * Matches the current URL pathname against routes.
 * Supports params like /category/:name
 */
function matchRoute(pathname) {
    for (const route of routes) {
        // split the route and path into parts, filtering out empty parts
        const routeParts = route.path.split("/").filter(Boolean);
        const pathParts = pathname.split("/").filter(Boolean);

        if (routeParts.length !== pathParts.length) continue;

        const params = {};
        let match = true;

        for (let i = 0; i < routeParts.length; i++) {
            const rp = routeParts[i];
            const pp = pathParts[i];

            if (rp.startsWith(":")) {
                params[rp.slice(1)] = decodeURIComponent(pp);
            } else if (rp !== pp) {
                match = false;
                break;
            }
        }

        if (match) return { view: route.view, params };
    }

    return { view: NotFound, params: {} };
}

/**
 * Renders the current route into the #main-content outlet.
 */
async function render() {
    const { view, params } = matchRoute(location.pathname);

    // Optional: highlight active nav links
    document.querySelectorAll("a[data-link]").forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === location.pathname);
    });

    // Render the selected view
    app.innerHTML = await view(params);

    // Remove FOUC protection after the first real render
    requestAnimationFrame(() => {
        mainContainer.classList.remove("app-hidden");
    });

    // Update cart badge after every view render
    updateCartBadge();
}

/**
 * Programmatic navigation without full reload.
 */
function navigate(to) {
    history.pushState({}, "", to);
    render();
}

// =============================
// Global Event Listeners
// =============================

/**
 * SPA navigation handler:
 * Intercepts clicks on <a data-link> and uses History API.
 */
document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (!link) return;

    // Allow opening in new tab / downloads / special clicks
    if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        link.target === "_blank" ||
        link.hasAttribute("download")
    ) {
        return;
    }

    e.preventDefault();
    navigate(link.getAttribute("href"));
});

/**
 * Cart handler:
 * Uses event delegation because buttons are created dynamically.
 */
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

// Back/forward buttons support
window.addEventListener("popstate", render);

// =============================
// App Init
// =============================

render();
