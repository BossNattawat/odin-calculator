const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

let firstNumber = null;
let secondNumber = null;
let operation = null;

const operators = ['+', '-', '*', '/'];

function getValue(number) {

    if (result.innerHTML === "0") {
        result.innerHTML = number;
    } else {
        result.innerHTML += number;
    }
}

function setOperation(op) {
    if (operation === null) {
        operation = op;
        result.innerHTML += ` ${op} `;
    }
}

function calculate() {
    const parts = result.innerHTML.split(" ");
    if (parts.length !== 3) return;

    const [firstStr, op, secondStr] = parts;
    firstNumber = parseFloat(firstStr);
    operation = op;
    secondNumber = parseFloat(secondStr);

    let finalResult;
    switch (operation) {
        case "+":
            finalResult = add(firstNumber, secondNumber);
            break;
        case "-":
            finalResult = subtract(firstNumber, secondNumber);
            break;
        case "*":
            finalResult = multiply(firstNumber, secondNumber);
            break;
        case "/":
            finalResult = divide(firstNumber, secondNumber);
            break;
        default:
            return;
    }

    result.innerHTML = `${finalResult}`;
    firstNumber = finalResult;
    operation = null
}

function clearDisplay() {
    result.innerHTML = "0";
    firstNumber = null;
    secondNumber = null;
    operation = null;
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return secondNumber === 0 ? "Error" : firstNumber / secondNumber;
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;
        if (operators.includes(value)) {
            setOperation(value);
        } else if (value === "=") {
            calculate();
        } else if (value === "AC") {
            clearDisplay();
        } else {
            getValue(value);
        }
    });
});
