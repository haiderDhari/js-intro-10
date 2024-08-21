/* Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is negative, print true.
Otherwise, print false. */ 
let ran = Math.floor(Math.random() * (5 - ( -5 ) + 1) + ( -5 ));

if(ran < 0) console.log(true);
else console.log(false);



// Write your solution below
let ran1 = Math.floor(Math.random() * 10) + 1;
let ran2 = Math.floor(Math.random() * 10) + 1;
let ran3 = Math.floor(Math.random() * 10) + 1;

if(ran1 < ran2 && ran1 < ran3) console.log('ran1');
else if (ran2 < ran1 && ran2 < ran3) console.log('ran2');
else if (ran3 < ran1 && ran3<ran2) console.log('ran3');


/* Write a function named as concat() which takes two string words as arguments and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string.

Examples:
concat("Tech", "Global")	-> "TechGlobal"
concat("Hello", "World")	-> "HelloWorld"
concat("", "abc")			-> "abc"
concat("123", "1234")		-> "1231234"  */

function concat(str1, str2) {
    return (str1 + ('') + str2);
  }
  console.log(concat("abc"));

  /*Write a program that generates a random number between 1 and 10 (both inclusive).
  If the random number is even, print true.
  Otherwise, print false.
  Examples:
  1 -> false
  2 -> true
  5 -> false
  10 -> true*/
let n = Math.floor(Math.random() * 10) + 1;

if(n % 2 === 0) console.log(true);
else console.log(false);

/* Find if a number is odd or not.
Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true
2 -> false
5 -> true
10 -> false */

let n1 = Math.floor(Math.random() * 10) + 1;

if (n1 % 2 !== 0) console.log(true);
else console.log(false);

/* Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true
-1 -> true
0 -> false
1 -> false
5 -> false  */

let r1 = Math.floor(Math.random() * (5 - ( -5 ) + 1) + ( -5 ));

if(r1 < 0) console.log(true);
else console.log(false);


// posative number 

let r2 = Math.floor(Math.random() * (5 - ( -5 ) + 1) + ( -5 ));

if(r2 > 0) console.log(true);
else console.log(false);


/* Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false
5 -> true
20 -> true
37 -> false
50 -> true */
let n2 = Math.floor(Math.random() * 50) + 1;

if(n2 % 5 === 0) console.log(true);
else console.log(false);

/* Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false
7 -> true
35 -> true
49 -> true
50 -> false  */
let n3 = Math.floor(Math.random() * 50) + 1;

if(n3 % 7 === 0) console.log(true);
else console.log(false);

/* Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the sum of the numbers and print it.
Examples:
3, 5 -> 8
7, 3 -> 10
5, 5 -> 10
1, 10 -> 11
10, 1 -> 11 */
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

let result = num1 + num2;
console.log(result);

/* Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the absolute difference of the numbers and print it.
Examples:
3, 5 -> 2
7, 3 -> 4
5, 5 -> 0
1, 10 -> 9
10, 1 -> 9  */
let num11 = Math.floor(Math.random() * 10) + 1;
let num22 = Math.floor(Math.random() * 10) + 1;

Result = Math.abs(num11 - num22);
console.log(Result);

/* Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the product of the numbers and print it.
Examples:
3, 5 -> 15
7, 3 -> 21
5, 5 -> 25
1, 10 -> 10
10, 1 -> 10  */

let num111 = Math.floor(Math.random() * 10) + 1;
let num222 = Math.floor(Math.random() * 10) + 1;

r3 = num111 * num222;
console.log(r3);

/* Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the square of the number and print it.
Examples:
1 -> 1
2 -> 4
5 -> 25
10 -> 100  */
let nm = Math.floor(Math.random() * 10) + 1;

nm = nm ** 2;
console.log(nm);

/* Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the cube of the number and print it.
Examples:
1 -> 1
2 -> 8
5 -> 125
10 -> 1000  */
let b = Math.floor(Math.random() * 10) + 1;

b = b ** 3;
console.log(b);

/* Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 -> 1.6
2 -> 3.2
5 -> 8  */
let N = Math.floor(Math.random() * 10) + 1;

let result2 = N * 1.6;
console.log(result2);

/* Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
Examples:
1 -> 2.2
20 -> 44
75 -> 165
100 -> 220  */
let N1 = Math.floor(Math.random() * 100) + 1;
let N1 = 75;
result3 = N1 * 2.2;
console.log(result3);


/* Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false.
Examples:
1, 1 -> true
1, 2 -> false
2,3 -> false
2,2 -> true
3, 3 -> false*/
let f = Math.floor(Math.random() * 3) + 1;
let s = Math.floor(Math.random() * 3) + 1;

if( f === s) console.log(true);
else console.log(false);


/* Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false
15 -> false
16 -> true
45 -> true
100 -> true*/
let age = Math.floor(Math.random() * 100) + 1;

if(age >= 16) console.log(true);
else console.log(false);


/* Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it.
Examples:
3, 5 -> 5
7, 3 -> 7
5, 5 -> 5
1, 10 -> 10
10, 1 -> 10 */
let greatest1 = Math.floor(Math.random() * 10) + 1;
let greatest2 = Math.floor(Math.random() * 10) + 1;

max = Math.max(greatest1, greatest2);
console.log(max);


/* Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it.
Examples:
3, 5, 2 -> 5
7, 3, 1 -> 7
5, 5, 5 -> 5
1, 10, 9 -> 10
10, 1, 2 -> 10 */
let g1 = Math.floor(Math.random() * 10) + 1;
let g2 = Math.floor(Math.random() * 10) + 1;
let g3 = Math.floor(Math.random() * 10) + 1;

max = Math.max(g1, g2, g3);
console.log(max);


/* Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it.
Examples:
3, 5 -> 3
7, 3 -> 3
5, 5 -> 5
1, 10 -> 1
10, 1 -> 1 */
let s1 = Math.floor(Math.random() * 10) + 1;
let s2 = Math.floor(Math.random() * 10) + 1;

min = Math.min(s1, s2);
console.log(min);

/* Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it.
Examples:
3, 5, 2 -> 2
7, 3, 1 -> 1
5, 5, 5 -> 5
1, 10, 9 -> 1
10, 1, 2 -> 1 */
let s11 = Math.floor(Math.random() * 10) + 1;
let s22 = Math.floor(Math.random() * 10) + 1;
let s33 = Math.floor(Math.random() * 10) + 1;

min = Math.min(s11, s22, s33);
console.log(min);


/* Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it.
Examples:
3, 5, 7 -> 5
7, 3, 2 -> 4
5, 5, 5 -> 5
1, 10, 7 -> 6
10, 1, 1 -> 4 */
let a1 = Math.floor(Math.random() * 10) + 1;
let a2 = Math.floor(Math.random() * 10) + 1;
let a3 = Math.floor(Math.random() * 10) + 1;

aver = (a1 + a2 + a3)/ 3;
console.log(aver);

/* Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
Examples:
3, 5, 2 -> 3
7, 3, 1 -> 6
5, 5, 5 -> 0
1, 10, 9 -> 9
10, 1, 2 -> 9 */
let m1 = Math.floor(Math.random() * 10) + 1;
let m2 = Math.floor(Math.random() * 10) + 1;
let m3 = Math.floor(Math.random() * 10) + 1;

m1 = 3, m2 = 5, m3 = 2;

max = Math.max(m1, m2, m3);
min = Math.min(m1, m2, m3);
abs = Math.abs(max - min);
console.log(abs);


/* Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
Examples:
15 -> 1st quarter
73 -> 3rd quarter
39 -> 2nd quarter
87 -> 4th quarter */
let random = Math.floor(Math.random() * 100) + 1;

if(random <= 25) console.log('1st');
else if (random <= 50) console.log('2nd');
else if (random <= 75) console.log('3rd');
else console.log('fourth');


/* Find the midpoint of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
Examples:
15 -> 1st half
50 -> 1st half
51 -> 2nd half 
87 -> 2nd half 
100 -> 2nd half */
let random1 = Math.floor(Math.random() * 100) + 1;

if(random1 <= 50) console.log('1st half');
else console.log('2nd half');

/* Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
Examples:
3, 5 -> true
7, 3 -> true
5, 5 -> true
1, 10 -> false
10, 1 -> false */
let u1 = Math.floor(Math.random() * 10) + 1;
let u2 = Math.floor(Math.random() * 10) + 1;


sum = u1 + u2;
if(sum % 2 === 0) console.log(true);
else console.log(false);


/* Find if product of 2 random numbers is odd or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the product of the random numbers is odd, print true.
Otherwise, print false.
Examples:
3, 5 -> true
7, 3 -> true
5, 5 -> true
1, 10 -> false
10, 1 -> false */
let o1 = Math.floor(Math.random() * 10) + 1;
let o2 = Math.floor(Math.random() * 10) + 1;

product = o1 * o2;
if(product % 2 === 0) console.log(false);
else console.log(true);


/* Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
Examples:
rectangleArea(5, 4) -> 20
rectangleArea(3, 7) -> 21
rectangleArea(6, 10) -> 60 */
function rectangleArea(x, y) {
return Area = x * y;
}
console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));


/* Perimeter of a rectangle.
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when 
invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
Examples:
rectanglePerimeter(5, 4) -> 18
rectanglePerimeter(3, 7) -> 20
rectanglePerimeter(6, 10) -> 32  */
function rectanglePerimeter(x, y) {
    return Perimeter = 2 * (x + y);
}
console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));


/* Area of a square
Write a function named as squareArea() which calculates the area of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x
Examples:
squareArea(5) -> 25
squareArea(3) -> 9
squareArea(6) -> 36  */
function squareArea(x) {
    return Area = x * x;
}
console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

/* Perimeter of a square.
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula: Perimeter = 4 * x
Examples:
squarePerimeter(5) -> 20
squarePerimeter(3) -> 12
squarePerimeter(6) -> 24  */
function squarePerimeter(x) {
    return Perimeter = 4 * x ;
}
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));


/* Double The Word
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech"
doubleWord("Global") -> "GlobalGlobal"*/
function doubleWord(str) {
return (`"${str.repeat(2)}"`);
}
console.log(doubleWord("Tech"));


/* First Character
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
firstCharacter("Tech") -> "T"
firstCharacter("Global") -> "G" */
function firstCharacter(str) {
return (`"${str[0]}"`);
}
console.log(firstCharacter("Tech"));


/* First Two Characters
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
Examples:
firstTwoCharacters("Tech") -> "Te"
firstTwoCharacters("Global") -> "Gl"
firstTwoCharacters("") -> ""
firstTwoCharacters(" ") -> " "
firstTwoCharacters("1") -> "1"  */
function firstTwoCharacters(str) {
return (`"${str.slice(0, 2)}"`);
}
console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Global"));
console.log(firstTwoCharacters(""));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters("1"));


/* Last Character
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
lastCharacter("Tech") -> "h"
lastCharacter("Global") -> "ll"
lastCharacter(" ") -> " "
lastCharacter("123") -> "3"  */
function lastCharacter(str) {
    return (`"${str.slice(-1)}"`);
}
console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter(" "));
console.log(lastCharacter(""));
console.log(lastCharacter("123"));




/* Last Two Characters
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
lastTwoCharacters("Tech") -> "ch"
lastTwoCharacters("Global") -> "al"
lastTwoCharacters("") -> ""
lastTwoCharacters(" ") -> " "
lastTwoCharacters("1") -> "1  */
function lastTwoCharacters(str) {
    return (`"${str.slice(-2)}"`);
}
console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters(""));
console.log(lastTwoCharacters(" "));
console.log(lastTwoCharacters("1"));


/* First and Last Characters
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
firstLast("Tech") -> "Th"
firstLast("TechGlobal") -> "Tl"
firstLast("") -> ""
firstLast(" ") -> " "
firstLast("1") -> "1"
firstLast("abcde") -> ae */
function firstLast(str) {
    first = str[0];
    last = str.slice(-1);
    result = first + last;
    if(str.length >= 2) return `"${result}"`;
    else return `"${str}"`;
}
console.log(firstLast("Tech"));
console.log(firstLast("TechGlobal"));
console.log(firstLast(""));
console.log(firstLast(" "));
console.log(firstLast("1"));
console.log(firstLast("abcde"));


/* Has Five
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked.
Examples:
hasFive("Tech") -> false
hasFive("Global") -> true
hasFive("") -> false
hasFive("12345") -> true
hasFive("hello") -> true */
function hasFive(str) {
    if(str.length >= 5) return true
    else return false;
}
console.log(hasFive("tech"));
console.log(hasFive("gloable"));
console.log(hasFive(""));


/* Middle
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples:
middle("Tech") -> "ec"
middle("Global") -> "ob"
middle("abcde") -> "c"
middle("1") -> "1"
middle("abc") -> "b"
middle(“1234”) -> "23  */
function middle(str) {
    if(str.length % 2 === 0) return str[str.length / 2 - 1] + str[str.length / 2];
    else if (str.length % 2 !== 0) return str[(str.length / 2) - 0.5 ];
    else return (str);
}
console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));


/* Longer String 
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked. 
NOTE: If both of the words have the same length, then return the first string. 
 
Examples: 
longer("Tech", "Global")  -> "Global" 
longer("Hello", "Hi")    -> "Hello" 
longer("Hello", "World")  -> "Hello" */
function longer(str1, str2) {
if(str1.length === str2.length) return (`"${str1}"`);
   else if(str1.length > str2.length) return (`"${str1}"`);
   else return (`"${str2}"`);
}

console.log(longer("Tech", "Global"));
console.log(longer("Hello", "Hi"));
console.log(longer("Hello", "World"));
 
/* Shorter String 
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked. 
NOTE: if both of the words have the same length, then return the second String. 
 
Examples: 
shorter("Tech", "Global")  -> "Tech" 
shorter("Hello", "Hi")    -> "Hi" 
shorter("Hello", "World")  -> "World" */
function shorter(str1, str2) {
    if(str1.length === str2.length) return (`"${str2}"`);
    else if (str1.length < str2.length) return (`"${str1}"`);
    else return (`"${str2}"`);
}
console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));


/* Concat Two String 
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked. 
NOTE: Concatenation should always be as first string + second string .  
 
Examples: 
concat("Tech", "Global")  -> "TechGlobal" 
concat("Hello", "World")  -> "HelloWorld" 
concat("", "abc")    -> "abc" 
concat("123", "1234")    -> "1231234"  */
function concat(str1, str2) {
return (str1 + ('') + str2);
}
console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));

/* Starts With Vowel 
Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked. 
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i. 
 
Examples: 
startsVowel("Tech")    -> false 
startsVowel("Apple")     -> true 
startsVowel("abc")     -> true  */
function startsVowel(str) {
if (str.startWith('A') || str.startWith('a')  || str.startWith('E') || str.startWith('e') || str.startWith('I') || str.startWith('i') || str.startWith('O') || str.startWith('o') || str.startWith('U') || str.startWith('u'))
     return (true);
else {
    return false;
  } 
}
console.log(startsVowel("Tech"));
console.log(startsVowel("Apple"));
console.log(startsVowel("abc"));


