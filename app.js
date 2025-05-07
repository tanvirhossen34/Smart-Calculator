const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const clickSound = document.getElementById("clickSound");

let isResultShown = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    const value = button.textContent;
    const operators = ["+", "-", "*", "/", "%"];
    const lastChar = display.value.slice(-1);

    if (value === "=") {
      if (display.value.trim() !== "") {
        try {
          display.value = eval(display.value);
          isResultShown = true;
        } catch {
          display.value = "Error";
          isResultShown = true;
        }
      }
    } else if (value === "C") {
      display.value = "";
      isResultShown = false;
    } else {
      if (isResultShown && !operators.includes(value)) {
        display.value = value;
      } else {
        if (operators.includes(value) && operators.includes(lastChar)) {
          display.value = display.value.slice(0, -1) + value;
        }else {
          display.value += value;
        }
      }
      isResultShown = false;
    }


  });
});
