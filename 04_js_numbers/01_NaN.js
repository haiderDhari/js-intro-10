console.log(NaN);
console.log(3 * '5');
console.log(3 + '5');
console.log(3 - '5');
console.log(5 * 'abc');

console.log(NaN + 'hello');

// isNaN() function-method used to check if an espresion evaluate to number or not 
console.log(isNaN(5)); // false


console.log(isNaN(10 * true));// false
console.log(isNaN(10 * 'hello'));// t

console.log(isNaN(true));// f true=1 number
console.log(isNaN('true'));// t '' string
console.log(isNaN('isNaN'));// t 
console.log(typeof NaN);// NUMBER
console.log(typeof isNaN(NaN));//Boleen
console.log(0 / 0);// NaN
