
const display = document.getElementById("input");

const buttons = document.querySelectorAll(".button");
const operator = document.querySelector(".operator");
const deleteButton = document.querySelector(".del");
const resetButton = document.querySelector(".reset");
const equalButton = document.querySelector(".equal");

// Number and operator buttons
function handleClick(e) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += e.target.value;
}

// Delete last character
function delClick() {
    if (display.value === "Error") {
        display.value = "";
        return;
    }

    display.value = display.value.slice(0, -1);
}

// Reset calculator
function resetClick() {
    display.value = "";
}

// Calculate result
function equalClick() {
    try {
        if (!display.value.trim()) {
            return;
        }

        const result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        display.value = String(result);

    } catch (error) {
        display.value = "Error";
    }
}

// Add click events to buttons
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

operator.addEventListener("click", handleClick);

deleteButton.addEventListener("click", delClick);

resetButton.addEventListener("click", resetClick);

equalButton.addEventListener("click", equalClick);
