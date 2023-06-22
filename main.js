let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');
let button = document.querySelector('.btn');

//counter

let num1 = number1.value;
let num2 = number2.value;

num1 = Number(num1);
num2 = Number(num2);

document.addEventListener("keydown", event => {
    for(let i = 1; i > 0; i++){
    let plus1 = num1 + 1;
    number1.value = plus1;
    }
})

document.addEventListener("click", event => {
    let plus2 = num2 + 1;
    number2.value = plus2;
})

//delete

button.addEventListener("click", event => {
    let delete1 = num1 - num1;
    let delete2 = num2 - num2;
    number1.value = delete1;
    number2.value = delete2;
})

//localStorage