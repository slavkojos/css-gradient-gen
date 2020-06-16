const body = document.querySelector("body");

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradient = document.createElement("h3");
const grad = document.getElementById("grad");
const hex1 = document.getElementById("hex1");
const hex2 = document.getElementById("hex2");
const copyButton = document.getElementById("copyButton");

const ratioSlider = document.getElementById("myRange");
const output = document.getElementById("demo");

const tooltip = document.getElementById("myTooltip");

grad.appendChild(gradient);
output.textContent = ratioSlider.value;

const randomButton = document.getElementById("random");

const dropdown = document.getElementById("gradientType");

function updateColorRatio() {
  output.textContent = ratioSlider.value;
  return ratioSlider.value + "%";
}

function randomHexCode() {
  const randomnumber = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + randomnumber.slice(0, 6);
}

function generateRandomColors() {
  color1.value = randomHexCode();
  color2.value = randomHexCode();
  changeColor();
}

function chooseGradientStyle() {
  return dropdown.value;
}

function changeColor() {
  hex1.innerHTML = "Color 1 HEX= <strong>" + color1.value + "</strong>";
  hex2.innerHTML = "Color 2 HEX= <strong>" + color2.value + "</strong>";
  body.style.background = `linear-gradient( ${chooseGradientStyle()},${color1.value}, ${updateColorRatio()},${color2.value})`;
  gradient.textContent = body.style.background;
}

function copyToClipboard(copyText) {
  const el = document.createElement("textarea");
  el.value = copyText;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  
}


changeColor();


color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

randomButton.addEventListener("click", generateRandomColors);

dropdown.addEventListener("change", function() {
  chooseGradientStyle();
  changeColor();
});

ratioSlider.addEventListener("input", function() {
  updateColorRatio();
  changeColor();
});

copyButton.addEventListener("click", function() {
  copyToClipboard(`background: " + ${body.style.background};`);
  copyButton.setAttribute("data-tooltip","Copied!");
  
});

copyButton.addEventListener("mouseout", function() {
 copyButton.setAttribute("data-tooltip","Click to copy");
});
