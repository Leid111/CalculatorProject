//finding the key and connecting it to the buttn - but not dispalying them yet
const numbersKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbersKeys.length; i++) {
    const number = numbersKeys[i];
    const button = document.getElementById("numbersButton" + number);
    button.addEventListener("click", () => numberInput(number));
}

// let buttonOperator = document.querySelectorAll(".btnOperator");
// buttonOperator.forEach((operator) => {
//     operator.addEventListener("click", () => {
//         t
//     });
// });

// const operatorKeys = ["Plus", "Divide", "x", "/"];
// for (let i = 0; i < operatorKeys.length; i++) {
//     const operator = operatorKeys[i];
//     const button = document.getElementById("numbersButton" + operator);
//     button.addEventListener(
//         "click",
//         () => (calculateOperations = (n1, operator, n2))
//     );
// }

// funtions

//display on the dispay
const display = (number) => {
    document.getElementById("displayValue").innerText = number;
    console.log(number);
};

let n1 = ""; // will be stored after they hit an operator
let n2 = ""; // will be stored after they click equals
let operator = ""; // will be stored agter they hit an operator
let result = "";

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
    display(number);
};

//Euqals Functions
const equals = (n1, operator, n2) => {
    let result = "";
    if (operator === "+") {
        result = n1 + n2;
    } else if (operator === "-") {
        result = n1 - n2;
    } else if (operator === "x") {
        result = n1 * n2;
    } else if (operator === "/") {
        result = n1 / n2;
    }

    return result;
};

const buttonClr = document.getElementById("buttonClr");
buttonClr.addEventListener("click", () => clear());

const buttonBkspc = document.getElementById("buttonBkspc");
buttonBkspc.addEventListener("click", () => backspace());
