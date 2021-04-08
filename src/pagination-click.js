import getData from "./data.js";

const paginationOnClick = () => {
  const paginationBtns = document.querySelectorAll(".pagination button");

  paginationBtns.forEach((btn, i) => {
    const index = i * 10;
    btn.addEventListener("click", () => {
      getData(index);
      window.scrollTo({ left: 0, top: 500, behavior: "smooth" });
    });
  });
};

export default paginationOnClick;
