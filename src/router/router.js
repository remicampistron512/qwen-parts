import { routes } from "./routes.js";
import { NotFoundView } from "../views/notFoundView.js";
import { updateCartBadge } from "../ui/cartBadge.js";

/**
 * Matches the current URL pathname against routes.
 * Supports params like /category/:name
 */
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

    return { view: NotFoundView, params: {} };
}

/**
 * Router factory. We pass DOM dependencies in, keeping router reusable.
 */
export function createRouter({ appEl, mainContainerEl }) {
    async function render() {
        const { view, params } = matchRoute(location.pathname);

        // Highlight active links
        document.querySelectorAll("a[data-link]").forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === location.pathname);
        });

        // Fade OUT
        appEl.classList.add("is-transitioning");

        // Wait for transition to be visible
        await new Promise((r) => setTimeout(r, 180));

        // Swap content
        appEl.innerHTML = await view(params);

        // Remove FOUC protection
        requestAnimationFrame(() => {
            mainContainerEl.classList.remove("app-hidden");
        });

        // Fade IN
        requestAnimationFrame(() => {
            appEl.classList.remove("is-transitioning");
        });

        updateCartBadge();
    }

    function navigate(to) {
        history.pushState({}, "", to);
        render();
    }

    function handlePopState() {
        render();
    }

    return { render, navigate, handlePopState };
}
