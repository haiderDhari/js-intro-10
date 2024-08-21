const { CharacterHelper } = require('../utils/CharacterHelper.js');

/*
Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100
Test data 1:
34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter
Test data 2:
76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

console.log('\n------------------TASK01------------------\n');

let num1 = 76;

if (num1 <= 50) {
    if (num1 <= 25) {
        console.log(`${num1} is in the 1st half
${num1} is in the 1st quarter`);
}
    else {
        console.log(`${num1} is in the 1st half
${num1} is in the 2nd quarter`);
    }
}
else {
    if (num1 <= 75) {
        console.log(`${num1} is in the 2nd half
${num1} is in the 3rd quarter`);
    }
    else {
        console.log(`${num1} is in the 2nd half
${num1} is in the 4th quarter`);
    }
}

/*
Requirement:
Assume you are given 3 numbers between 1 and 100 
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1:
2, 4, 6
Expected result 1:
true
Test data 2:
68, 44, 2
Expected result 2:
true
Test data 3:
10, 20, 25
Expected result 3:
false
Test data 4:
51, 67, 99
Expected result 4:
false
*/

console.log('\n------------------TASK02------------------\n');

let n1 = 2;
let n2 = 5;
let n3 = 6;

console.log(n1 % 2 === 0 && n2 % 2 === 0 && n3 % 2 === 0);

/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.
Test data 1:
"a"
Expected result 1:
"a"  is a letter
Test data 2:
"5"
Expected result 2:
"5"  is a digit
Test data 2:
"$"
Expected result 1:
"$"  is a special character
Test data 4:
" "
Expected result 4:
" " is a whitespace
*/

console.log('\n------------------TASK03------------------\n');

let char = ' ';

if(CharacterHelper.isLetter(char)) console.log(`"${char}" is a letter`);
if(CharacterHelper.isDigit(char)) console.log(`"${char}" is a digit`);
if(CharacterHelper.isSpecial(char)) console.log(`"${char}" is a special character`);
if(CharacterHelper.isSpace(char)) console.log(`"${char}" is a whitespace`);

/*
Write a function named hasBlue() which takes a string argument 
and returns true if the string has an occurrence of blue word, 
returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/

console.log('\n------------------TASK04------------------\n');

function hasBlue(str) {
    str = str.toLowerCase();
    return str.includes('blue');
}

/*
Write a function named startT() which takes a string argument 
and returns true if the string start with letter T, returns false 
otherwise.
NOTE: Ignore upper/lower cases.
Examples:
startT("Hello World")    -> false
startT("typescript")    -> true
startT("TechGlobal")    -> true
startT("1234")    -> false
startT("ABC")    -> false
*/

console.log('\n------------------TASK05------------------\n');

function startT(str) {
    str = str.toLowerCase();
    return str.startsWith('t');
}