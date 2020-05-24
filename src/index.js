var body = document.querySelector("body");

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var gradient = document.createElement("h3");
var grad = document.getElementById("grad");
var hex1 = document.getElementById("hex1");
var hex2 = document.getElementById("hex2");
var copyButton = document.getElementById("copyButton");

var ratioSlider = document.getElementById("myRange");
var output = document.getElementById("demo");

var tooltip = document.getElementById("myTooltip");

grad.appendChild(gradient);
output.textContent = ratioSlider.value;

var randomButton = document.getElementById("random");

var dropdown = document.getElementById("gradientType");

function updateColorRatio() {
  output.textContent = ratioSlider.value;
  return ratioSlider.value + "%";
}

function randomHexCode() {
  var randomnumber = (Math.random() * 0xfffff * 1000000).toString(16);
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
  body.style.background =
    "linear-gradient(" +
    chooseGradientStyle() +
    "," +
    color1.value +
    ", " +
    updateColorRatio() +
    "," +
    color2.value +
    ")";
  gradient.textContent = body.style.background;
}

changeColor();

function copyToClipboard(copyText) {
  const el = document.createElement("textarea");
  el.value = copyText;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  tooltip.innerHTML = "Copied!";
}

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
  copyToClipboard("background: " + body.style.background);
});

copyButton.addEventListener("mouseout", function() {
  tooltip.innerHTML = "Copy to clipboard";
});
