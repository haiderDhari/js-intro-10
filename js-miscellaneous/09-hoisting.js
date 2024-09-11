
printHi();

// function declearation 
function printHi() {
    console.log('Hi');
}

printHi();


const printHi = function () {
    console.log('Hi');
}

printHi();

// arrow 
const printHi = () => {
    console.log('Hi');
}

printHi();

console.log(name); // undefined
var name = 'john'; // const  and let will show error

console.log(name); // error
let name = 'john';

console.log(arr); // error
const arr = [ 10, 15, 20 ];


console.log(arr1); // undefined
var arr1 = [ 10, 15, 20 ];


// loop

for(let i = 1; i <= 3; i++) {
    console.log(i);
}

console.log(i); // error

for(i = 1; i <= 3; i++) {
    console.log(i);
}

console.log(i); // 1 2 3 4