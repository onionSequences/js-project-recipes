import createEl from "./helpers.js";

const getLabels = (labels) => {
  const lablesDiv = createEl("div", "", "labels");

  labels.forEach((label) => lablesDiv.append(createEl("p", label, "label")));
  return lablesDiv;
};

export default getLabels;
