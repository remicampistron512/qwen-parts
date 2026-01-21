/**
 * Intercepts clicks on <a data-link> to prevent full reload and use SPA navigation.
 */
export function setupNavigationHandler(navigate) {
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a[data-link]");
        if (!link) return;

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
}
