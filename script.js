function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    display.value = eval(display.value); // Note: eval is generally not safe for user input, but it's okay for a simple calculator.
}
