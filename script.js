const display = document.getElementById("display");

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (num1, num2, operation) {
    if (operation == "+") {
        return add(num1, num2);
    }
    else if (operation == "-") {
        return subtract(num1, num2);
    }
    else if (operation == "*") {
        return multiply(num1, num2);
    }
    else if (operation == "/") {
        return divide(num1, num2);
    }
}

function addToDisplay(num) {
    if (display.textContent == 0)
        clear();
    display.textContent += num;
}
  
function clear() {
    display.textContent = "";
}

function reset() {
    display.textContent = 0;
}

console.log(operate(3,4,"*"))

addToDisplay(0);
addToDisplay(4);
clear();
reset();
addToDisplay(5);