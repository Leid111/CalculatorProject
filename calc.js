// Find the button
const numbersButtonDivide = document.getElementById("numbersButtonDivide");
{
    numbersButtonDivide.innerText;
}
const numbersButton1 = document.getElementById("numbersButton1");
{
    numbersButton1.innerText;
}
const numbersButton2 = document.getElementById("numbersButton2");
{
    numbersButton2.innerText;
}
const numbersButton3 = document.getElementById("numbersButton3");
{
    numbersButton3.innerText;
}
const numbersButton4 = document.getElementById("numbersButton4");
{
    numbersButton4.innerText;
}
const numbersButton5 = document.getElementById("numbersButton5");
{
    numbersButton5.innerText;
}
const numbersButton6 = document.getElementById("numbersButton6");
{
    numbersButton6.innerText;
}
const numbersButton7 = document.getElementById("numbersButton7");
{
    numbersButton7.innerText;
}
const numbersButton8 = document.getElementById("numbersButton8");
{
    numbersButton8.innerText;
}
const numbersButton9 = document.getElementById("numbersButton9");
{
    numbersButton9.innerText;
}
const numbersButton0 = document.getElementById("numbersButton0");
{
    numbersButton0.innerText;
}
//button funtions

const numberInputDevide = () => {
    document.getElementById("previousValue").innerText += "÷";
};
const numberInput1 = () => {
    document.getElementById("previousValue").innerText += 1;
};
const numberInput2 = () => {
    document.getElementById("previousValue").innerText += 2;
};
const numberInput3 = () => {
    document.getElementById("previousValue").innerText += 3;
};
const numberInput4 = () => {
    document.getElementById("previousValue").innerText += 4;
};
const numberInput5 = () => {
    document.getElementById("previousValue").innerText += 5;
};
const numberInput6 = () => {
    document.getElementById("previousValue").innerText += 6;
};
const numberInput7 = () => {
    document.getElementById("previousValue").innerText += 7;
};
const numberInput8 = () => {
    document.getElementById("previousValue").innerText += 8;
};
const numberInput9 = () => {
    document.getElementById("previousValue").innerText += 9;
};
const numberInput0 = () => {
    document.getElementById("previousValue").innerText += 0;
};

//connecting to the buttons
numbersButtonDivide.addEventListener("click", numberInputDevide);
numbersButton1.addEventListener("click", numberInput1);
numbersButton2.addEventListener("click", numberInput2);
numbersButton3.addEventListener("click", numberInput3);
numbersButton4.addEventListener("click", numberInput4);
numbersButton5.addEventListener("click", numberInput5);
numbersButton6.addEventListener("click", numberInput6);
numbersButton7.addEventListener("click", numberInput7);
numbersButton8.addEventListener("click", numberInput8);
numbersButton9.addEventListener("click", numberInput9);
numbersButton0.addEventListener("click", numberInput0);
