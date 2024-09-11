function afunc() {
    let variable = 'Hello';
}

console.log(variable); // error


function funcA() {
    let number1 = 10;

    function funcB() {
    let number2 = 99;
    console.log(number1);
    console.log(number2);
    }
     funcB();
}

funcA();