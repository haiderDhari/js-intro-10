
// the right way 60 or above = Pass, else = Fail
let exam_score =59;

if(exam_score >= 60){
    console.log('Pass')
}
else{
    console.log('Fail')
}

//
let exam_score = 69;
if(exam_score < 60){
    console.log('fail')
}
else {
    console.log('pass')
}

//

if(true) {
    console.log('hi');
    console.log('haider')
}
else {
    console.log('A');
    console.log('B')
}

if(false) {
    console.log('hi');
    console.log('haider')
}
else {
    console.log('A');
    console.log('B')
}

if(false) console.log('hi'), console.log('haider');

else {
    console.log('A');
    console.log('B')
}

if(true) console.log('hi'), console.log('haider');

else {
    console.log('A');
    console.log('B')
}

let exam_score = 59;

if (exam_score >= 60){
    console.log('Pass');
}
else{
    console.log('Fail');
}





/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 25;

let age = 25;

if (age >= 65) {
    console.log('YOU CAN GET RETIRED');
}
else {
    console.log('YOU CANNOT GET RETIRED')
}

// OR DIFFERENT WAY
let age = 35;

if (age >= 65) console.lo('pass');
else console.log('fail')


// if its true get the first letter , false get the last 
let fname = 'Alex';
let first = true;


if (first == true) console.log(fname[0]);
else console.log(fname(fname.length - 1));


let fname = 'Alex';
let first = false;
// get the last letter 

if (first == true) console.log(fname[0]);
else console.log(fname.at(- 1));

 // or 

let fname = 'Alex'
let first = false;

 if(first == true) {
    console.log(fname[0]);
 }
 else{

    console.log(fname.at(-1));
 }


 // to call functions from differnt folder/ file
 // if the randome number = 7 true , otherwise false
 const {getRandomNumber} = require('../Utils/mathHelper.js');

 let r1 = getRandomNumber(1, 10);
 console.log(r1);

if (r1 === 7) {
    console.log(true);
}
else{
    console.log(false);
}
// another way
let result = r1 === 7 ? true : false;
console.log(result);


/*
Generate a random number between 1 and 10
Print EVEN if the number is EVEN
Print ODD if the number is ODD

5   -> 'ODD'
8   -> 'EVEN'
*/

let r2 = Math.floor(Math.random() * 10) +1;
if ( r2 % 2 === 0){
    console.log('EVEN');
}
else{
    console.log('ODD');
}

console.log('Random number is =', r2);

// or


// leddar statement
let num = 0;
if(num > 0) {
    console.log('Posative');
}
else if(num <0) {
    console.log('Negative');
}
else {
    console.log('Neutral');
}

// nested statememnts

let num = 0;
if(num > 0) {
    console.log('Posative');
}
else if(num <0) {
    console.log('Negative');
}
else {
    
    console.log('Neutral');
}

