const createButton = (value, className, onClickFunction) => {
  const button = document.createElement("div");
  button.innerText = value;
  button.className = className;

  button.addEventListener("click", () => onClickFunction(value));
  return button;
};

function createDiv(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}
