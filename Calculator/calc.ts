const add: Function = (a: number, b: number): number => a + b;
const subtract: Function = (a: number, b: number): number => a - b;
const divide: Function = (a: number, b: number): number => a / b;
const multiply: Function = (a: number, b: number): number => a * b;
const power: Function = (a: number, b: number): number => Math.pow(a, b);
const sqrt = (a: number): number => Math.sqrt(a);

type Operator = "add" | "subtract" | "multiply" | "divide" | "power" | "sqrt";

interface Button {
  type: "number" | "operator" | "action";
  value: string;
}

type currentOperation = {
valueOne: number
operator: string
valueTwo: number
valueAmount: number
}

const evaluateCurrOp: Function = (op: currentOperation): string => {if (op.operator === "add") {return add(op.valueOne,op.valueTwo)}
else if (op.operator === "subtract") {return subtract(op.valueOne,op.valueTwo)}
else if (op.operator === "multiply") {return multiply(op.valueOne,op.valueTwo)}
else if (op.operator === "divide") {return multiply(op.valueOne,op.valueTwo)} else {return "Error. Undefined operator *string* value"}
};

const topTextArea = document.querySelector("#topDisplay");
const bottomTextArea = document.querySelector("#bottomDisplay");

const blinky = {valueOne:6,operator:"add",valueTwo:6};
console.log(evaluateCurrOp(blinky))