const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "0";
      return;
    }

    if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
      return;
    }

    if (display.value === "0" && !isNaN(value)) {
      currentInput = value;
    } else {
      currentInput += value;
    }
    display.value = currentInput;
  });
});
