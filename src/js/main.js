// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";


const app = document.querySelector("#main-content");
const mainContainer = document.querySelector("#main-container");
const routes = [
    { path: "/", view: Home },
    { path: "/category/:name", view: CategoryView },
    { path: "/users", view: Users },
];

// -------- Router core --------
function matchRoute(pathname) {
    for (const route of routes) {
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
async function render() {
    const { view, params } = matchRoute(location.pathname);

    document.querySelectorAll("a[data-link]").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === location.pathname);
    });

    app.innerHTML = await view(params);

    requestAnimationFrame(() => {
        mainContainer.classList.remove("app-hidden");
    });
}


function CategoryView({ name }) {
    const filtered = PRODUCTS.filter(p => p.category === name);
    return renderCategory(name, filtered);
}

render();
function navigate(to) {
    history.pushState({}, "", to);
    render();
}

// Handle back/forward buttons
window.addEventListener("popstate", render);

// Intercept clicks on links
document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (!link) return;

    // allow ctrl/cmd click, middle click, external targets, downloads, etc.
    if (
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey ||
        link.target === "_blank" ||
        link.hasAttribute("download")
    ) return;

    e.preventDefault();
    navigate(link.getAttribute("href"));
});

// Initial load
render();

// -------- Views (pages) --------
function Home() {
    return `
   
    <section class="py-5">
        <div class="row align-items-center gy-4">
            <div class="col-12 col-lg-6">
                <h1 class="hero-title mb-0">Build a better pc</h1>
                <h5 class="fw-lighter">Premium components, verified compatibility,fast delivery</h5>
            </div>
            <div class="col-12 col-lg-6">
                <div class="img-placeholder">
                    <img src="img/hero.png" alt="Hero image" />
                </div>
            </div>
        </div>
    </section>

    <!-- Shop by category -->


    <h4 class="mb-5">Shop by category</h4>


    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <ul class="nav justify-content-around">
                    <li class="nav-item">
                        <a class="nav-link nav-icon-pill active">
                        <i class="bi bi-gpu-card"></i>
                        <span class="nav-link" href="#">GPU</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-icon-pill">
                            <i class="bi bi bi-cpu"></i>
                            <span class="nav-link" href="#">CPU</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-icon-pill ">
                            <i class="bi bi-memory"></i>
                            <span class="nav-link" href="#">RAM</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="/motherboard" class="nav-link nav-icon-pill ">
                            <i class="bi bi-motherboard"></i>
                            <span class="nav-link" >Motherboard</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-icon-pill ">
                            <i class="bi  bi-database"></i>
                            <span class="nav-link" href="#">Storage</span>
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





    <!-- Featured -->
    <section id="featured" class="py-5">
        <h4>featured</h4>
        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card" >
                    <img src="img/case.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" class="btn btn-primary"><i class="bi bi-cart"></i> Add to cart</a>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <img src="img/ryzen-7.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" class="btn btn-primary"><i class="bi bi-cart"></i> Add to cart</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card" >
                    <img src="img/power-supply.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" class="btn btn-primary"><i class="bi bi-cart"></i> Add to cart</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card" >
                    <img src="img/cooler.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" class="btn btn-primary"><i class="bi bi-cart"></i> Add to cart </a>
                    </div>
                </div>
            </div>

        </div>
    </section>


  `;
}





async function Users() {
    // Example: data fetching per route
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return `
    <h1>Users</h1>
    <ul>
      ${users.map(u => `<li>${u.name}</li>`).join("")}
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
function showCategory(category) {
    const filtered = PRODUCTS.filter(p => p.category === category);

    document.querySelector("#app").innerHTML =
        renderCategory(category, filtered);
}

function renderCategory(categoryName, products) {
    const cardsHTML = products.map(p => `
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
  `).join("");

    return `
    <section class="py-5">
      <h4 class="mb-4 text-capitalize">${categoryName}</h4>
      <div class="row g-4">
        ${cardsHTML || `<p class="text-muted">No products found.</p>`}
      </div>
    </section>
  `;
}


const PRODUCTS = [
    {
        id: 1,
        category: "motherboard",
        title: "ASUS B550",
        description: "AM4 ATX motherboard with PCIe 4.0",
        price: 149.99,
        img: "img/motherboard.jpg"
    },
    {
        id: 2,
        category: "motherboard",
        title: "MSI B760",
        description: "Intel LGA1700 motherboard for 12th/13th gen",
        price: 169.99,
        img: "img/motherboard2.jpg"
    },
    {
        id: 3,
        category: "cpu",
        title: "Ryzen 7 5800X",
        description: "8 cores / 16 threads",
        price: 229.99,
        img: "img/ryzen-7.jpg"
    },
    {
        id: 4,
        category: "psu",
        title: "Corsair RM750",
        description: "750W Gold modular PSU",
        price: 119.99,
        img: "img/power-supply.jpg"
    }
];
