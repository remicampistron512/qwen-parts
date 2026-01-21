// Import custom styles + libraries once in the entry file
import "/scss/styles.scss";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createRouter } from "./router/router.js";
import { setupNavigationHandler } from "./handlers/navigationHandler.js";
import { setupCartHandler } from "./handlers/cartHandler.js";

let searchTimer;

document.addEventListener("input", (e) => {
    const input = e.target.closest("#search-input");
    if (!input) return;

    clearTimeout(searchTimer);

    searchTimer = setTimeout(() => {
        const query = input.value.trim();
        history.pushState({}, "", `/search?q=${encodeURIComponent(query)}`);
        router.render();
    }, 300); // debounce
});

document.addEventListener("submit", (e) => {
    const form = e.target.closest("#search-form");
    if (!form) return;

    e.preventDefault();

    const input = document.querySelector("#search-input");
    const query = input.value.trim();

    // Go to /search?q=...
    history.pushState({}, "", `/search?q=${encodeURIComponent(query)}`);
    router.render();
});
// DOM references
const app = document.querySelector("#main-content");
const mainContainer = document.querySelector("#main-container");

// Create router instance
const router = createRouter({
    appEl: app,
    mainContainerEl: mainContainer,
});

// Setup handlers
setupNavigationHandler(router.navigate);
setupCartHandler(router.render);

// Back/forward support
window.addEventListener("popstate", router.handlePopState);

// Initial render
router.render();
