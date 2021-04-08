import createLoader from "./loader.js";
import content from "./content.js";

const appId = process.env.APP_ID;
const apiKey = process.env.API_KEY;

const getData = (showResultsFromIndex = 0) => {
  const searchInput = document.querySelector("input.keyword-input");
  const diet = document.querySelector('select[name="diet"]');
  const health = document.querySelector('select[name="health"]');
  const dietParam = diet.value ? "&diet=" + diet.value : "";
  const healthParam = health.value ? "&health=" + health.value : "";
  const minCal = document.querySelector('input[name="minCalories"]');
  const maxCal = document.querySelector('input[name="maxCalories"]');
  const loader = createLoader();

  let url = `https://api.edamam.com/search?q=${searchInput.value}&app_id=${appId}&app_key=${apiKey}&from=${showResultsFromIndex}&calories=${minCal.value}-${maxCal.value}${dietParam}${healthParam}`;

  fetch(url)
    .then((data) => (data.ok ? data.json() : console.log("Api response error")))
    .then((res) => {
      content(res);
      loader.innerHTML = "";
    })
    .catch((err) => console.error("Error:", err));
};
export default getData;
