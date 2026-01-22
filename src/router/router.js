import { routes } from "./routes.js";
import { NotFoundView } from "../views/notFoundView.js";
import { updateCartBadge } from "../ui/cartBadge.js";

/**
 * Matches the current url with registered routes.
 * Supports dynamic parameters like:
 *   /category/:name  ->  { name: "motherboard" }
 *
 * @param {string} pathname - Current location.pathname (example: "/category/cpu")
 * @returns {{ view: Function, params: Object }}
 *          view   = the page function to render
 *          params = extracted parameters from the URL
 */
function matchRoute(pathname) {
    // Loop through each registered route definition
    for (const route of routes) {
        // Split route path and current path into URL parts
        // Example: "/category/:name" => ["category", ":name"]
        //          "/category/cpu"   => ["category", "cpu"]
        const routeParts = route.path.split("/").filter(Boolean);
        const pathParts = pathname.split("/").filter(Boolean);

        // If length differs, it cannot match
        if (routeParts.length !== pathParts.length) continue;

        const params = {}; // store extracted route params (ex: { name: "cpu" })
        let match = true;

        // Compare each part of the route with the current path
        for (let i = 0; i < routeParts.length; i++) {
            const rp = routeParts[i]; // route part
            const pp = pathParts[i];  // path part

            // If route part is a param (ex: ":name"), capture it
            if (rp.startsWith(":")) {
                // decodeURIComponent allows category names with spaces/special chars
                params[rp.slice(1)] = decodeURIComponent(pp);
            }
            // Otherwise it must match exactly
            else if (rp !== pp) {
                match = false;
                break;
            }
        }

        // If all parts match, return the view function + extracted params
        if (match) return { view: route.view, params };
    }

    // If no route matches, return NotFound page
    return { view: NotFoundView, params: {} };
}

/**
 * Router factory:
 * Creates a SPA router that can render views inside a specific element.
 * We pass DOM elements in (dependency injection) to keep the router reusable.
 *
 * @param {Object} options
 * @param {HTMLElement} options.appEl - The outlet where pages are rendered (#main-content)
 * @param {HTMLElement} options.mainContainerEl - Container used for FOUC protection (#main-container)
 */
export function createRouter({ appEl, mainContainerEl }) {
    /**
     * Renders the current route (based on location.pathname)
     * and applies a small fade transition for smoother navigation.
     */
    async function render() {
        // Get matching view + params for current URL
        const { view, params } = matchRoute(location.pathname);

        // Highlight active SPA nav links (<a data-link>)
        document.querySelectorAll("a[data-link]").forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === location.pathname);
        });

        // Fade OUT current content before swapping HTML
        appEl.classList.add("is-transitioning");

        // Wait enough time so the fade-out animation is visible
        await new Promise((r) => setTimeout(r, 180));

        // Replace the outlet content with the selected view HTML
        // view(params) may return a string or a Promise<string>
        appEl.innerHTML = await view(params);

        // Remove FOUC (Flash of Unstyled Content) protection after first real render
        requestAnimationFrame(() => {
            mainContainerEl.classList.remove("app-hidden");
        });

        // Fade IN new content after it has been inserted
        requestAnimationFrame(() => {
            appEl.classList.remove("is-transitioning");
        });

        // Update cart badge after every render (keeps UI in sync with LocalStorage)
        updateCartBadge();
    }

    /**
     * Navigates to a new URL using the History API (no full page reload).
     * Then triggers render() to update the displayed view.
     */
    function navigate(to) {
        history.pushState({}, "", to);
        render();
    }

    /**
     * Handles browser back/forward navigation.
     * popstate fires when the active history entry changes.
     */
    function handlePopState() {
        render();
    }

    // Expose router API to main.js
    return { render, navigate, handlePopState };
}
