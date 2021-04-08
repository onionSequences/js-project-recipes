import recipe from "./recipe.js";
import pagination from "./pagination.js";
import createEl from "./helpers.js";

const content = (data) => {
  const recipesSection = document.getElementById("recipes");
  const allResults = document.querySelector(".recipe-count-number");
  allResults.textContent = data.count;

  recipesSection.innerHTML = "";
  if (data.count) {
    data.hits.forEach((article) => recipe(article));
    pagination(data);
  } else {
    recipesSection.append(
      createEl("p", "No search results found. Please try again", "notFound")
    );
  }
};

export default content;
