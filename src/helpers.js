import noImage from "./img/no-img-available.jpg";

const createEl = (type, path, cssClass) => {
  const element = document.createElement(type);

  if (type === "img") {
    element.setAttribute("src", path);
    // Handle if server response with broken img url
    element.onerror = () => {
      element.setAttribute("src", noImage);
    };
  } else {
    element.textContent = path;
    if (cssClass) element.classList.add(cssClass);
  }
  return element;
};
export default createEl;
