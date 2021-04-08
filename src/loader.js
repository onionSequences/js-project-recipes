import loaderGif from "./img/loader.gif";
import createEl from "./helpers.js";

const createLoader = () => {
  const loader = document.querySelector(".loader");
  const loaderImg = createEl("img", loaderGif);

  loader.append(loaderImg);
  return loader;
};
export default createLoader;
