/*Requirement:
Write a program that generates a random number 
between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below 
message
Expected result:
The random number * 5 = {result}*/

console.log(Math.floor((Math.random() * 51 ) * 5 ));



/*Requirement:
Write a program that generates two random numbers 
between 1 and 10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers
Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}*/

console.log('\n---------------TASK02---------------\n');

let r1 = Math.floor(Math.random() * 10) +1;
let r2 = Math.floor(Math.random() * 10) +1;

console.log(r1 , r2);
console.log(`Minumber = {${Math.min(r1 , r2)}}`);
console.log(`Maxnumber = {${Math.max(r1 , r2)}}`);
console.log(`Differences = {${Math.abs(r1 , r2)}}`);

/*Requirement:
Write a program that generates a random number 
between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result}*/

/*let Requirement:
Write a program that generates a random number 
between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:*/

let random  = {result} = Math.floor(Math.random() * 51) + 50;

console.log(random);
console.log(random % 10);


/*Requirement:
Write a program that generates 5 random numbers between 
1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the 
points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
Test data:
3 7 2 1 8
Expected result:*/
let r1 = Math.floor(Math.random() * 10) + 1;
let r2 = Math.floor(Math.random() * 10) + 1;
let r3 = Math.floor(Math.random() * 10) + 1;
let r4 = Math.floor(Math.random() * 10) + 1;
let r5 = Math.floor(Math.random() * 10) + 1;

console.log(r1,r2,r3,r4,r5);
console.log((r1 * 5) + (r2 * 4) + (r3 * 3) + (r4 * 2) + (r5 * 1));

let points = 0;//0 50 90 96 114 122

points += rand1 * 5;
points += rand2 * 4;
points += rand3 * 3;
points += rand4 * 2;
points += rand5 * 1;

console.log(points);


/*Write a program that generates 4 random numbers as 
below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
Find the absolute difference between the max and min 
number
Find the absolute difference between the second and 
third number
Find the average of all 4 numbers
Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}*/
let ran1 = Math.floor(Math.random() * 25) + 1;
let ran2 = Math.floor(Math.random() * 25) + 26;
let ran3 = Math.floor(Math.random() * 25) + 51;
let ran4 = Math.floor(Math.random() * 25) + 7;

console.log(`Difference of max and min = {${Math.abs(Math.max(ran1,ran2,ran3,ran4) - Math.min(ran1,ran2,ran3,ran4))}}`);
console.log(`deffrences of second and third = {${Math.abs(ran2 - ran3)}}`)
console.log(`Average of all = {${(ran1 + ran2 + ran3 + ran4) / 4 }}`);
