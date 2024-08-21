// output number from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// get numbers from 100 to 0

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// all even numbers from 0 to 50 -> starts 0 2 4 6 8 ......
for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

// all even numbers from 0 to 50 -> starts 2 4 6 8 ......
for (let i = 2; i <= 50; i += 2) {
   if(i % 2 === 0) console.log(i);
}


// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 …
for (let i = 0; i <= 50; i += 5) {
    if(i % 5 === 0) console.log(i);
 }

// output the sum of the numbers from 1 to 5
let sum = 0;

 for (let i = 1; i <= 5; i++) {
 sum += i; 
 }
 
console.log(sum);
// output the sum of the numbers from 10 to 15

let sum1 = 0;

 for (let i = 10; i <= 15; i++) {
 sum1 += i; 
 }
 
console.log(sum1);

// another way 10 to 15 the sum
let sum2 = 0;

for (let i = 15; i >= 10; i--) {
    sum2 += i;
}

console.log(sum2); 

// find the product of all the numbers from 1 to 6 both inclusive 
let product = 1;

for(i = 1; i <= 6; i++) {
    product *= i;
}

console.log(product); // 720

// output eaach charector in a different line 
let str = 'TechGloabal School';

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// count how many o in the str
let str2 = 'TechGloabal School';
let countO = 0;

for (let i = 0; i < str2.length; i++) {
   if(str2[i] === 'o') countO++;
}

console.log(countO);

// output all the odd numbers(between 10 and 20)
const { getRandomNumber } = require('../utils/MathHelper.js');

let r1 = getRandomNumber (10, 20);

for (let i = 1; i <= r1; i += 2) {
console.log(i) ;
 }

// or 
for (let i = 1; i <= r1; i++) {
    if(i % 2 !== 0) console.log(i) ;
     }
    
/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/
const { getRandomNumber } = require('../utils/MathHelper.js');


let r2 = getRandomNumber(1, 10);
console.log(`the random number is =  ${r2}`);
product = 1;

for(let i = 1; i <= r2; i++) {
    product *= i;
}

console.log(product);


/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/
const { getRandomNumber } = require('../utils/MathHelper.js');

let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);


let max = Math.max(ran1, ran2);
let min = Math.min(ran1, ran2);

for(let i = min; i <= max ; i++) {
    console.log(i);
}

