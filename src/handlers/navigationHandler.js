/**
 * Sets up SPA navigation using event delegation.
 * It intercepts clicks on <a data-link> elements so the browser does NOT reload the page.
 *
 * @param {Function} navigate - Router navigation function (ex: router.navigate)
 */
export function setupNavigationHandler(navigate) {
    // One global click listener handles all internal SPA links (even after re-render)
    document.addEventListener("click", (e) => {
        // Find the closest clickable link that has data-link
        // (supports clicking on icons/spans inside the <a>)
        const link = e.target.closest("a[data-link]");
        if (!link) return;

        // Allow normal browser behavior for special cases:
        // - Ctrl/Cmd click: open in new tab
        // - Shift/Alt click: special browser behaviors
        // - target="_blank": explicitly opens a new tab
        // - download attribute: triggers file download
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

        // Prevent full page reload for SPA navigation
        e.preventDefault();

        // Navigate using History API (pushState) + re-render the view
        navigate(link.getAttribute("href"));
    });
}
