const numbers = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ];

// we can check if the array containes some specific elelments 

let check5 = numbers.includes(5); // true
console.log(check5);
let check77 = numbers.includes(77); // true
console.log(check77);

console.log(numbers.includes(20)); // false 

// indexOf() vs lastIndexOf()

console.log(numbers.indexOf(5));
console.log(numbers.lastIndexOf(5));

console.log(numbers.indexOf(10));
console.log(numbers.lastIndexOf(10));

console.log(numbers.indexOf(25));
console.log(numbers.lastIndexOf(25));

console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));

// check if the array contain without includes
const cities = ['be', 'che', 'ro', 'br'];

console.log(cities.includes('be'));
console.log(cities.indexOf('be') !== -1);

console.log(cities.includes('be', 3));


// numbers arrays
const arr = [10, 20, 30, 40, 25, 100, 5, 10, 20, 90];

console.log(arr.includes(30)); // true
console.log(arr.includes(30, arr.length / 2)); // false

