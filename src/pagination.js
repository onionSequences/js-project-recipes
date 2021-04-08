import paginationOnClick from "./pagination-click.js";
import createEl from "./helpers.js";

const pagination = (data) => {
  const pagesDiv = document.querySelector(".pagination");
  let numberOfPages = Math.round(data.count / 10);
  const currentPage = data.from / 10;
  let active;

  pagesDiv.innerHTML = "";

  /* We can show only first 100 results due to
     API DEVELOPER Licence restrictions */
  if (numberOfPages > 10) numberOfPages = 10;

  for (let page = 1; page <= numberOfPages; page++) {
    if (page - 1 === currentPage) {
      active = createEl("button", page);
      active.setAttribute("disabled", true);
      pagesDiv.append(active);
      continue;
    }
    pagesDiv.append(createEl("button", page));
  }
  paginationOnClick();
};

export default pagination;
