/**
 * Generates a Bootstrap breadcrumb navigation component.
 * Supports SPA navigation using <a data-link> for router interception.
 *
 * @param {Array<{ label: string, href: string }>} items
 *  - label: text (or HTML) displayed in the breadcrumb
 *  - href: URL used for navigation when the item is clickable
 *
 * @returns {string} HTML string for the breadcrumb trail
 */
export function Breadcrumbs(items) {
    // Convert breadcrumb items into <li> elements
    const html = items
        .map((item, index) => {
            // The last breadcrumb item represents the current page
            const isLast = index === items.length - 1;

            return `
        <li class="breadcrumb-item ${isLast ? "active" : ""}"
            ${isLast ? 'aria-current="page"' : ""}>
          
          ${
                // Last item should NOT be clickable (it's the current page)
                isLast
                    ? item.label
                    : `
                <a href="${item.href}" data-link class="text-decoration-none">
                  ${item.label}
                </a>
              `
            }

        </li>
      `;
        })
        .join(""); // Join all <li> elements into a single string

    // Wrap breadcrumb items in Bootstrap markup (<nav> + <ol>)
    return `
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        ${html}
      </ol>
    </nav>
  `;
}
