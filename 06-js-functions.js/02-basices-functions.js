/*
Write a function which takes a number and return true if the number is even 
or return false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)  -> true
isEven(-7)  -> false

EVEN: number is divisible by 2      -> number % 2 === 0
ODD: number is not divisible by 2   -> number % 2 !== 0
*/

function isEven(num) {
    if(num % 2 ===0) return true;
    else return false;
    
}
console.log(isEven(4));
console.log(isEven(5));


function isEven(num) {
    return num % 2 === 0;

}
console.log(isEven(4));
console.log(isEven(3));

// ex 
function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isOdd(7));
console.log(isOdd(2));



/*Write a function named initials which takes 2 arguments as fname and lname and return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/

function initials(fname, lname) {
    return ($fname.charAt(0)+'.' +lname.charAt(0));

}

console.log(initials('John', 'Doe'));

// or the right one

function initials(fname, lname) {
    return (`${fname[0]}.${lname[0]}.`);
}
console.log(initials('John', 'Doe'));
console.log(initials('John', 'Doe'));

/*
Write a function named inits which takes a fullname and return initials

inits('John Doe')      -> 'JD'
inits('Adam Smith')    -> 'AS'
inits('Max Smith')     -> 'MS'
*/

function inits(fullname){
let fullname = fname[0] + lnameo[0];
return fullname;
}
console.log(inits('john doe'));

/*
Write a function that takes 2 number arguments and return a random number between these numbers
Both numbers are included 
Be careful as the numbers given can be different considering min, max

getRandomNumber(3, 5)       -> 
getRandomNumber(5, 3)       -> 
getRandomNumber(-5, 15)     -> 
*/

function getRandomNumber(num1, num2) {
    let max = Math.max(num1 , num2);
    let min = Math.min(num1, num2);
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(3, 5));
console.log(getRandomNumber(5, 3));
console.log(getRandomNumber(-5, 15));

