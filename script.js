const display = document.getElementById("display");
const keys = document.getElementById("controls");
let ans = 0;
let pendingOperation = null;
let clearNext = false;

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    console.log(key)
    console.log(action)
    console.log(keyContent)
    console.log(displayedNum)

    
    if (clearNext) {
        clear();
        clearNext = false;
    }
    

    if (action == "add") {
        doPendingOperation(displayedNum);
        pendingOperation = "+";
    }

    else if (action == "subtract") {
        doPendingOperation(displayedNum);
        pendingOperation = "-";
    }

    else if (action == "multiply") {
        doPendingOperation(displayedNum);
        pendingOperation = "*";
    }

    else if (action == "divide") {
        doPendingOperation(displayedNum);
        pendingOperation = "/";
    }

    else if (action == "clear") {
        reset();
        ans = 0;
        clearNext = false;
        pendingOperation = null;
    }

    else if (action == "calculate") {
        if (pendingOperation != null) {
            ans = operate(ans, displayedNum, pendingOperation);
            clear();
            addToDisplay(ans);
            ans = 0;
            clearNext = true;
            pendingOperation = null;
        }
        else {
            clear();
            addToDisplay(displayedNum);
        }
    }

    else {
        addToDisplay(keyContent);
    }
 }
})

function doPendingOperation(displayedNum) {
    if (pendingOperation == null) {
        ans = operate(ans, displayedNum, "+");
        clear();
        addToDisplay(ans);
        clearNext = true;
    }
    else {
        ans = operate(ans, displayedNum, pendingOperation);
        clear();
        addToDisplay(ans);
        clearNext = true;
        pendingOperation = "+"
    }
}

function add (num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract (num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
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
