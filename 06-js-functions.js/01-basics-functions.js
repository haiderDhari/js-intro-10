/*
creat a function witch prints 'Hi'when involved 
*/
// this VOID zero argument function
function sayHi(){
console.log('Hi')
}
sayHi();// 'Hi'

function sayHi(){
    console.log('Hi')
    console.log('world')
    }
    sayHi();

    /* creat a function whitch takes a string argument 
    and is returns 'Hello{name}'
    */

function sayHello(name) {
  return `Hello, ${name}`
}
console.log(sayHello('haider'));

let result = sayHello('haider');
console.log(result);

/*
Write a function named as greet which takes two argument as name and greeting and outputs '${greeting}, {name}!'

greet('Good Morning', 'John'); // Output: 'Good Morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'
greet('Hi', 'Hicran'); // Output: 'Hi, Hicran!'*/

function greet(greeting,name) {
    console.log(`${greeting}, ${name}!`);
}
console.log('hello', 'haider')
console.log('goodmorning', 'haider')

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

function sum(num1, num2) {
    let result = num1 + num2;
    return result
}
console.log(sum(3, 5));


function product(n1, n2, n3) {
    let result = n1 * n2 * n3;
    return result
}
console.log(product(2, 4, 5));



function product(n1, n2, n3) {
    return n1 * n2 * n3;
}
console.log(product(2, 4, 5));





function long(str1, str2){
    if (str1.length >= str2.length) return str1;
    else return str2;
}

console.log(long('hhhhhh', 'ffffffff'));