//finding the key and connecting it to the buttn - but not dispalying them yet
const numbersKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbersKeys.length; i++) {
    const number = numbersKeys[i];
    const button = document.getElementById("numbersButton" + number);
    button.addEventListener("click", () => numberInput(number));
}

// funtions

//display on the dispay
const display = (number) => {
    document.getElementById("displayValue").innerText = number;
};

// number 0-9 function
let number = "";
const numberInput = (n) => {
    number += n;
    display(number);
};

//backspace function
const backspace = () => {
    number = number.slice(0, number.length - 1);
    display(number);
};

//AC function
const clear = () => {
    number = "";
    n1 = "";
    display(number);
};

// operator function - i want to rename/reassign number varable to n1 and store the operany
let operator = "";
let n1 = "";
let n2 = "";
const operatorKeys = (o) => {
    n1 += number;
    operator = o;
    number = 0;
    display(n1 + o);
    n1 = parseFloat(n1);
};

//Euqals Functions
const equals = (n1, operator, number) => {
    let result = "";
    if (operator === "+") {
        result = n1 + number;
        display(result);
    } else if (operator === "-") {
        result = n1 - number;
        display(result);
    } else if (operator === "x") {
        result = n1 * number;
        display(result);
    } else if (operator === "/") {
        result = n1 / number;
        display(result);
    }
    return result;
};

const buttonClr = document.getElementById("buttonClr");
buttonClr.addEventListener("click", () => clear());

const buttonBkspc = document.getElementById("buttonBkspc");
buttonBkspc.addEventListener("click", () => backspace());

const buttonPlus = document.getElementById("buttonPlus");
buttonPlus.addEventListener("click", () => operatorKeys("+"));

const buttonMinus = document.getElementById("buttonMinus");
buttonMinus.addEventListener("click", () => operatorKeys("-"));

const buttonMultiplaction = document.getElementById("buttonMultiplaction");
buttonMultiplaction.addEventListener("click", () => operatorKeys("x"));

const buttonDivide = document.getElementById("buttonDivide");
buttonDivide.addEventListener("click", () => operatorKeys("/"));

const buttonEqual = document.getElementById("buttonEqual");
buttonEqual.addEventListener("click", () => equals(n1, operator, number));
