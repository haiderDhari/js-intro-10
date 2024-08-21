/* Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25  */

console.log('\n---------------TASK01---------------\n');

let str1 = "5", str2 = "2";

console.log('The sum of 5 and 2 is = ' +(Number(str1) + Number(str2)));
console.log('The product of 5 and 2 is = ' +(Number(str1) * Number(str2)));
console.log('The division of 5 and 2 is = ' + (Number(str1) / Number(str2)));
console.log('The subtraction of  5 and 2 is = ' + (Number(str1) - Number(str2)));
console.log('The remainder of 5 and 2 is = ' + (Number(str1) % Number(str2)));
console.log('The exponentiation of 5 and 2 is = ' + (Number(str1) ** Number(str2)));


/* Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250  */

console.log('\n---------------TASK02---------------\n');

let s1 = "200", s2 = "-50";

console.log('The greatest value is = ' + Math.max(Number(s1), Number(s2)));
console.log('The smallest value is = ' + Math.min(Number(s1), Number(s2)));
console.log('The average is = ' + (Number(s1) + Number(s2)) / 2);
console.log('The absolute difference is = ' + Math.abs(Number(s1) - Number(s2)));


/* Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the absolute difference of these numbers.
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22  */

console.log('\n---------------TASK03---------------\n');

let ranNum1 = Math.floor(Math.random() * 50) + 1;
let ranNum2 = Math.floor(Math.random() * 50) + 1;

console.log('The absolute difference between numbers is = ' + Math.abs(ranNum1 - ranNum2));


/* Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the max and min of these numbers.
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3  */

console.log('\n---------------TASK04---------------\n');

let N1 = Math.floor(Math.random() * 50) + 1;
let N2 = Math.floor(Math.random() * 50) + 1;
let N3 = Math.floor(Math.random() * 50) + 1;
let N4 = Math.floor(Math.random() * 50) + 1;
let N5 = Math.floor(Math.random() * 50) + 1;

console.log('The max value = ' + Math.max(N1, N2, N3, N4, N5));
console.log('The min value = ' + Math.min(N1, N2, N3, N4, N5));


/* Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212  */

console.log('\n---------------TASK05---------------\n');

let number1 = Math.floor(Math.random() * 51) + 50;
let number2 = Math.floor(Math.random() * 51) + 50;
let number3 = Math.floor(Math.random() * 51) + 50;

console.log('The number 1 = ' + number1);
console.log('The number 2 = ' + number2);
console.log('The number 3 = ' + number3);
console.log('The sum of numbers is = ' +(number1 + number2 + number3));


/* Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25.  */

console.log('\n---------------TASK06---------------\n');

let r1 = Math.floor(Math.random() * 100) + 1;
let r2 = Math.floor(Math.random() * 100) + 1;
let r3 = Math.floor(Math.random() * 100) + 1;

console.log((r1 > 25) && (r2 > 25) && (r3 > 25));


/* Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid  */

console.log('\n---------------TASK07---------------\n');

let name = "David";

console.log('The length of the name is = ' + name.length);
console.log('The first character in the name is = ' + name[0]);
console.log('The last character in the name is = ' + name.at(-1));
console.log('The first 3 characters in the name are = ' + name.substring(0, 3));
console.log('The last 3 characters in the name are = ' + name.slice(-3));


