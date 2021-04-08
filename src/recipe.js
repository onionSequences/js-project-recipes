import getLabels from "./labels.js";
import createEl from "./helpers.js";

const recipe = (article) => {
  const recipesSection = document.getElementById("recipes");
  const recipeDiv = createEl("article", "", "recipe-element");
  recipeDiv.addEventListener("click", () =>
    window.open(article.recipe.url, "_blank")
  );
  recipeDiv.prepend(
    createEl("img", article.recipe.image),
    createEl("h3", article.recipe.label),
    createEl(
      "p",
      `${Math.round(article.recipe.calories / article.recipe.yield)} kcal`,
      "calories"
    ),
    getLabels(article.recipe.healthLabels)
  );
  recipesSection.append(recipeDiv);
};
export default recipe;
