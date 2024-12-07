const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => b !== 0 ? a / b : NaN;
const multiply = (a, b) => a * b;
const power = (a, b) => Math.pow(a, b);
const sqrt = (a) => Math.sqrt(a);
const currentOperation = {
    valueOne: 0,
    operator: null,
    valueTwo: null,
	previousOperation: null,
	valueAmount: null,
	editing: null,
	equals: null
};
const topTextArea = document.querySelector("#topDisplay");
const bottomTextArea = document.querySelector("#bottomDisplay");
bottomTextArea.innerHTML = 0;
function returnoperator(secretoperatorvalue) {
	if (secretoperatorvalue == "add" || secretoperatorvalue == "+") {
		return " + ";
	} else if (secretoperatorvalue == "subtract" || secretoperatorvalue == "-") {
		return " - ";
	} else if (secretoperatorvalue == "multiply" || secretoperatorvalue == "*") {
		return " × ";
	} else if (secretoperatorvalue == "sqrt" || secretoperatorvalue == "√") {
		return " &#8730; ";
	}
}
const updateDisplay = () => {
    if (currentOperation.valueOne === null) {
		topTextArea.innerHTML = "";
		bottomTextArea.innerHTML = 0;
	} else if (currentOperation.valueOne !== null) {
		if (currentOperation.previousOperation === null) {
			if (currentOperation.operator === null) {
				topTextArea.innerHTML = "";
				bottomTextArea.innerHTML = currentOperation.valueOne;
			} else {
				topTextArea.innerHTML = currentOperation.previousOperation;
				bottomTextArea.innerHTML = currentOperation.valueOne;
			}
		} else if (currentOperation.previousOperation !== null) {
			
		}
	};
};

function setValue(value) {
    if (currentOperation.operator === null) {
        currentOperation.valueOne = currentOperation.valueOne === null ? value : currentOperation.valueOne * 10 + value;
    }
    else {
        currentOperation.valueTwo = currentOperation.valueTwo === null ? value : currentOperation.valueTwo * 10 + value;
    }
	updateDisplay()
}
function setOperator(operator) {
    if (currentOperation.valueOne === null)
        return;
    if (operator === "sqrt") {
        currentOperation.operator = "sqrt";
        evaluateCurrentOperation();
    }
    else {
        currentOperation.operator = operator;
    }
	currentOperation.valueTwo = null;
    updateDisplay();
}
function evaluateCurrentOperation() {
    const { valueOne, operator, valueTwo } = currentOperation;
    if (valueOne === null || operator === null)
        return;
    let result;
    switch (operator) {
        case "add":
            result = valueTwo !== null ? add(valueOne, valueTwo) : "Error";
            break;
        case "subtract":
            result = valueTwo !== null ? subtract(valueOne, valueTwo) : "Error";
            break;
        case "multiply":
            result = valueTwo !== null ? multiply(valueOne, valueTwo) : "Error";
            break;
        case "divide":
            result = valueTwo !== null ? divide(valueOne, valueTwo) : "Error";
            break;
        case "power":
            result = valueTwo !== null ? power(valueOne, valueTwo) : "Error";
            break;
        case "sqrt":
            result = sqrt(valueOne);
            break;
        default:
            result = "Error. Undefined operator";
    }
    topTextArea.innerHTML = currentOperation.valueOne + returnoperator(currentOperation.operator) + currentOperation.valueTwo + ' = ';
	currentOperation.previousOperation = currentOperation.valueOne + returnoperator(currentOperation.operator) + currentOperation.valueTwo + ' = ';
    bottomTextArea.innerHTML = result.toString();
    currentOperation.valueOne = typeof result === "number" ? result : 0;
	currentOperation.valueTwo = null;
}
function handleBackspace() {
    if (currentOperation.operator === null) {
        if (currentOperation.valueOne !== null) {
            const value = currentOperation.valueOne.toString();
            currentOperation.valueOne = parseInt(value.slice(0, -1)) || null;
        }
    }
    else if (currentOperation.valueTwo !== null) {
        const value = currentOperation.valueTwo.toString();
        currentOperation.valueTwo = parseInt(value.slice(0, -1)) || null;
    }
    updateDisplay();
}
window.handleBackspace = handleBackspace;
function resetCalculator() {
    currentOperation = { valueOne: null, operator: null, valueTwo: null };
    updateDisplay();
}
window.resetCalculator = resetCalculator;