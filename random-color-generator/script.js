const containerEl = document.querySelector(".container");

// console.log(ColorcontainerEls);

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const ColorcontainerEls = document.querySelectorAll(".color-container");
// randomColor();
generateColors();

function generateColors() {
  console.log("jj");
  ColorcontainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdf";
  const colorCodeLen = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLen; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
