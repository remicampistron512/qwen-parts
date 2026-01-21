// Import custom styles + libraries once in the entry file
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import { createRouter } from "./router/router.js";
import { setupNavigationHandler } from "./handlers/navigationHandler.js";
import { setupCartHandler } from "./handlers/cartHandler.js";

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
