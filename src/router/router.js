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

        document.querySelectorAll("a[data-link]").forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === location.pathname);
        });

        appEl.innerHTML = await view(params);

        requestAnimationFrame(() => {
            mainContainerEl.classList.remove("app-hidden");
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
