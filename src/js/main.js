// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";


const app = document.querySelector("#main-content");
const mainContainer = document.querySelector("#main-container");
const routes = [
    { path: "/",       view: Home },
    { path: "/motherboard",  view: Motherboard },
    { path: "/users",  view: Users },
];

// -------- Router core --------
function matchRoute(pathname) {
    return routes.find(r => r.path === pathname) || { view: NotFound };
}

async function render() {
    const { view } = matchRoute(location.pathname);

    // Optional: highlight active link
    document.querySelectorAll("a[data-link]").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === location.pathname);
    });

    // Render view
    app.innerHTML = await matchRoute(location.pathname).view();

    // reveal after the DOM is updated
    requestAnimationFrame(() => {
        mainContainer.classList.remove("app-hidden");
    });
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

function Motherboard() {
    return `
    <h1>Home</h1>
    <p>This is a vanilla JS SPA.</p>
  `;
}

function About() {
    return `
    <h1>About</h1>
    <p>No React, no framework. Just History API + render().</p>
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
