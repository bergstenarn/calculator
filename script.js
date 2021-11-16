const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
  // If current display value is 0, replace it. If not, append number
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;
}

function addDecimal() {
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent += ".";
  }
}

// Add event listeners for numbers, operators and decimal
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", addDecimal);
  }
});

// Reset display
function resetAll() {
  calculatorDisplay.textContent = "0";
}

// Event listener
clearBtn.addEventListener("click", resetAll);
