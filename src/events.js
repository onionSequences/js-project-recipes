import getData from "./data.js";

const submitBtn = document.querySelector("button");
const searchInput = document.querySelector("input.keyword-input");
const minCal = document.querySelector('input[name="minCalories"]');
const maxCal = document.querySelector('input[name="maxCalories"]');

const activeBtn = () => {
  searchInput.value && minCal.value && maxCal.value
    ? submitBtn.removeAttribute("disabled")
    : submitBtn.setAttribute("disabled", true);
};

const inputListener = searchInput.addEventListener("input", activeBtn);

/* Set that number as min (html input atribute) for maxCal
    and max for minCal, coresponding to user input */
const setMinOrMax = (e, attribute, callback) => {
  let number = Math.abs(e.target.value); //  Prevent negative numbers

  e.target.setAttribute(attribute, number);
  callback();
};

const minCalListener = minCal.addEventListener("input", (e) =>
  setMinOrMax(e, "max", activeBtn)
);
const maxCalListener = maxCal.addEventListener("input", (e) =>
  setMinOrMax(e, "min", activeBtn)
);

const submitListener = submitBtn.addEventListener("click", () => getData());

export {
  activeBtn,
  inputListener,
  minCalListener,
  maxCalListener,
  submitListener,
};
