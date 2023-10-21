let display = document.getElementById("display");
let calculation = "";

function appendToDisplay(value) {
    calculation += value;
    display.value = calculation;
}

function clearDisplay() {
    calculation = "";
    display.value = "";
}

function backspace() {
    calculation = calculation.slice(0, -1);
    display.value = calculation;
}


function calculateResult() {
    try {
        calculation = eval(calculation);
        display.value = calculation;
    } catch (error) {
        display.value = "Error";
        calculation = "";
    }
}
