const typeSelect = document.getElementById("type");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const inputValue = document.getElementById("inputValue");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

const units = {
  length: ["meters", "kilometers", "centimeters", "millimeters", "miles", "yards", "feet", "inches"],
  weight: ["kilograms", "grams", "pounds", "ounces"],
  temperature: ["celsius", "fahrenheit", "kelvin"]
};

function populateUnits(type) {
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";
  units[type].forEach(u => {
    const opt1 = document.createElement("option");
    const opt2 = document.createElement("option");
    opt1.value = opt2.value = u;
    opt1.textContent = opt2.textContent = u;
    fromUnit.appendChild(opt1);
    toUnit.appendChild(opt2);
  });
  fromUnit.value = units[type][0];
  toUnit.value = units[type][1];
}

function convert() {
  const type = typeSelect.value;
  const val = parseFloat(inputValue.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  if (isNaN(val)) {
    result.value = "Enter value";
    return;
  }

  let converted = val;

  if (type === "length") {
    const meters = {
      meters: 1,
      kilometers: 1000,
      centimeters: 0.01,
      millimeters: 0.001,
      miles: 1609.34,
      yards: 0.9144,
      feet: 0.3048,
      inches: 0.0254
    };
    converted = val * (meters[from] / meters[to]);
  }

  if (type === "weight") {
    const kg = {
      kilograms: 1,
      grams: 0.001,
      pounds: 0.453592,
      ounces: 0.0283495
    };
    converted = val * (kg[from] / kg[to]);
  }

  if (type === "temperature") {
    if (from === to) converted = val;
    else if (from === "celsius" && to === "fahrenheit") converted = (val * 9/5) + 32;
    else if (from === "fahrenheit" && to === "celsius") converted = (val - 32) * 5/9;
    else if (from === "celsius" && to === "kelvin") converted = val + 273.15;
    else if (from === "kelvin" && to === "celsius") converted = val - 273.15;
    else if (from === "fahrenheit" && to === "kelvin") converted = ((val - 32) * 5/9) + 273.15;
    else if (from === "kelvin" && to === "fahrenheit") converted = ((val - 273.15) * 9/5) + 32;
  }

  result.value = +converted.toFixed(4);
}

populateUnits("length");
typeSelect.addEventListener("change", () => populateUnits(typeSelect.value));
convertBtn.addEventListener("click", convert);
