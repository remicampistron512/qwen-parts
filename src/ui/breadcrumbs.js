export function Breadcrumbs(items) {
    const html = items
        .map((item, index) => {
            const isLast = index === items.length - 1;

            return `
        <li class="breadcrumb-item ${isLast ? "active" : ""}" ${isLast ? 'aria-current="page"' : ""}>
          ${
                isLast
                    ? item.label
                    : `<a href="${item.href}" data-link class="text-decoration-none">${item.label}</a>`
            }
        </li>
      `;
        })
        .join("");

    return `
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        ${html}
      </ol>
    </nav>
  `;


}

