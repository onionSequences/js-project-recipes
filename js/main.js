var submitBtn = document.querySelector("button");
var searchInput = document.querySelector("input.keyword-input");
var recipesSection = document.getElementById("recipes");
var minCal = document.querySelector('input[name="minCalories"]');
var maxCal = document.querySelector('input[name="maxCalories"]');

function getData(showResultsFromIndex) {
  var request = new XMLHttpRequest();
  var loader = createLoader();
  var url = requestUrl(showResultsFromIndex);

  request.open("GET", url);

  request.onload = function () {
    if (request.status === 200 || request.status === 201) {
      createContent(JSON.parse(request.responseText));
      loader.innerHTML = "";
    }
  };

  request.send();
}

// Prepare url based on select/input fields
function requestUrl(showResultsFromIndex = 0) {
  var appId = "APP_ID";
  var appKey = "APP_KEY";
  var diet = document.querySelector('select[name="diet"]');
  var dietParam = "";
  var health = document.querySelector('select[name="health"]');
  var healthParam = "";
  var url;

  if (diet.value) dietParam = "&diet=" + diet.value;

  if (health.value) healthParam = "&health=" + health.value;

  url =
    "https://api.edamam.com/search?q=" +
    searchInput.value +
    "&app_id=" +
    appId +
    "&app_key=" +
    appKey +
    "&from=" + //  We dont need to set &to in url because default state is &from=NUM+10 - Showing us next 10 items from showResultsFromIndex
    showResultsFromIndex +
    "&calories=" +
    minCal.value +
    "-" +
    maxCal.value +
    dietParam +
    healthParam;

  return url;
}

// Loader
function createLoader() {
  var loader = document.querySelector(".loader");
  var loaderImg = createEl("img", "./img/loader.gif");

  loader.append(loaderImg);
  return loader;
}

// Function for creating elements
function createEl(type, path, cssClass) {
  var element = document.createElement(type);

  if (type === "img") {
    element.setAttribute("src", path);
    return element;
  } else {
    element.textContent = path;
    if (cssClass) element.classList.add(cssClass);
    return element;
  }
}

// Content
function createContent(data) {
  var allResults = document.querySelector(".recipe-count-number");
  allResults.textContent = data.count;

  recipesSection.innerHTML = "";
  data.hits.forEach(function (article) {
    createRecipe(article);
  });

  createPagination(data);
}

function createRecipe(article) {
  var recipeDiv = createEl("article", "", "recipe-element");

  recipeDiv.append(createEl("img", article.recipe.image));
  recipeDiv.append(createEl("h3", article.recipe.label));
  recipeDiv.append(
    createEl("p", Math.round(article.recipe.calories) + " kcal", "calories")
  );
  recipeDiv.append(getLabels(article.recipe.healthLabels));
  recipesSection.append(recipeDiv);
}

function getLabels(labels) {
  var lablesDiv = createEl("div", "", "labels");

  labels.forEach(function (label) {
    lablesDiv.append(createEl("p", label, "label"));
  });
  return lablesDiv;
}

function createPagination(data) {
  var pagesDiv = document.querySelector(".pagination");
  var numberOfPages = Math.round(data.count / 10);
  var currentPage = data.from / 10;
  var active;

  pagesDiv.innerHTML = "";

  if (numberOfPages > 10) numberOfPages = 10; // We can show only first 100 results due to API DEVELOPER Licence restrictions

  for (var page = 1; page <= numberOfPages; page++) {
    if (page - 1 === currentPage) {
      active = createEl("button", page);
      active.setAttribute("disabled", true);
      pagesDiv.append(active);
      continue;
    }
    pagesDiv.append(createEl("button", page));
  }
  paginationOnClick();
}

function paginationOnClick() {
  var paginationBtns = document.querySelectorAll(".pagination button");

  paginationBtns.forEach(function (btn, i) {
    var index = i * 10;
    btn.addEventListener("click", function () {
      getData(index);
      window.scrollTo({ left: 0, top: 500, behavior: "smooth" });
    });
  });
}

function activeBtn() {
  searchInput.value && minCal.value && maxCal.value
    ? submitBtn.removeAttribute("disabled")
    : submitBtn.setAttribute("disabled", true);
}

searchInput.addEventListener("input", activeBtn);

minCal.addEventListener("input", function () {
  var number = Math.abs(this.value); //Let's prevent negative numbers

  maxCal.setAttribute("min", number); //Set that number as min for maxCal input
  activeBtn();
});

maxCal.addEventListener("input", function () {
  var number = Math.abs(this.value); //Let's prevent negative numbers

  minCal.setAttribute("max", number); //Set that number as max for minCal input
  activeBtn();
});

submitBtn.addEventListener("click", () => getData());
