// if - else if - else if - else 
// these are also known as LADDER statememnts 

const {getRandomNumber} = require('../Utils/mathHelper.js');

let number = getRandomNumber(1, 4);
console.log('Random number =', number);

if(number === 1) {
    console.log('ONE');
}
else if (number === 2) {
    console.log('TWO');
}
else if (number === 3) {
    console.log('THREE');
}
else if (number === 4) {
    console.log('FOUR');
}
else {
    throw Error('the methof created a number that is not in the giving range');
}

// or
let result = number === 1 ? 'ONE' : number === 2 ? 'TWO' : number === 3 ? 'THREE' : 'FOUR';
console.log(result);


// or
result = number === 1 ? 'ONE': 
number === 2 ? 'TWO': 
number === 3 ? 'THREE': 
'FOUR';
console.log(result);


/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

console.log('\n---------------TASK-2-----------------\n');

let r2 = getRandomNumber(1, 12);

console.log('Random month is =', r2);

if (r2 === 1 || r2 === 2 || r2 === 12) {
    console.log("Winter");
}
else if (r2 === 3 ||r2 === 4 ||r2 === 5) {
    console.log("Spring");
}
else if (r2 === 6 ||r2 === 7 ||r2 === 8) {
    console.log("Summer");
}
else {
    console.log("Fall");
}

// or 
if(r2 >= 3 && r2 <= 5) console.log("Spring");
else if (r2 >= 6 && r2 <= 8) console.log("Summer");
else if (r2 >= 9 && r2 <= 11) console.log("Fall");
else console.log('Winter');

//or
if (r2 === 1 || r2 === 2 || r2 === 12) console.log('Winter');
else if (r2 === 3 ||r2 === 4 ||r2 === 5) console.log("Spring");
else if (r2 === 6 ||r2 === 7 ||r2 === 8) console.log("Summer");
else console.log('Winter');


// the method 
function getRandomNumber(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let r2 = getRandomNumber(1, 12);

console.log('Random month is =', r2);

if (r2 === 1 || r2 === 2 || r2 === 12) console.log('Winter');
else if (r2 === 3 ||r2 === 4 ||r2 === 5) console.log("Spring");
else if (r2 === 6 ||r2 === 7 ||r2 === 8) console.log("Summer");
else console.log('Winter');


