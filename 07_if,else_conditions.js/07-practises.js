const { getRandomNumber } = require('../utils/MathHelper.js');

/*
Generate a random number between -10 and 10 (both inclusive)
Print "The number is POSITIVE" if the generated number is more than zero
Print "The number is NEGATIVE" if the generated number is less than zero
Print "The number is ZERO" if the generated number is zero
*/
console.log('\n---------------TASK-1-----------------\n');

let r1 = getRandomNumber(-10, 10);

console.log('Random number is =', r1);

if ( r1 > 0) {
    console.log("The number is POSITIVE");
}
else if (r1 < 0) {
    console.log("The number is NEGATIVE" );
}
else  { // or else if (r1 === 0) 
    console.log("The number is ZERO" );
}  


//or another way to solve it 

if( r1 > 0) console.log("The number is POSITIVE");
else if (r1 < 0) console.log("The number is NEGATIVE" );
else  console.log("The number is ZERO" );


