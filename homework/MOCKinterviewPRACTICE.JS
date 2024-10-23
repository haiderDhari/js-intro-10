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

// 2222222222
/*1
Double or Triple the Word 
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked. 
 
Examples: 
doubleOrTripleWord("Tech")     -> "TechTechTech" 
doubleOrTripleWord("Apple")     -> "AppleApple” 
doubleOrTripleWord("")       -> "" 
doubleOrTripleWord(" ")       -> " " 
doubleOrTripleWord("1")       -> "11" 
doubleOrTripleWord("22")       -> "222222"
*/

function doubleOrTripleWord(str) {
    if(str.length % 2 === 0) return str + str + str;
else if(str.length % 2 !== 0) return str + str;
else return str;
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" ") );
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

/*2
First and Last Word 
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 

Examples: 
firstLastWord("Hello World")     -> "HelloWorld" 
firstLastWord("I like JavaScript")    -> "IJavaScript” 
firstLastWord("Hello")       -> "HelloHello" 
firstLastWord("")         -> "" 
firstLastWord("  ")       -> "" 
*/

function firstLastWord(str) {
let str1 = str.split(' ');
let first =  str1[0];

let last = str1.slice(-1);
let result = first + last;
if(str.length <= 0) return '';
return result;
}

console.log(firstLastWord("Hello World") );
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello") );
console.log(firstLastWord("") );
console.log(firstLastWord("  "));

/*3
Has Vowel 
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. 

Examples: 
hasVowel("")        -> false 
hasVowel("Javascript")     -> true 
hasVowel("Tech Global")     -> true 
hasVowel("1234")       -> false 
hasVowel("ABC")       -> true
*/

function hasVowel(str) {
let str1 = str.toLowerCase();
const Vowels = [ 'a', 'i', 'e', 'u', 'o' ];
for(let i =0; i < str1.length; i++) {
if(Vowels.includes(str1[i])) return true;
}
return false;
}

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

/*4
Start Vowel 
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples: 
startVowel("Hello")     -> false 
startVowel("Apple")    -> true 
startVowel("orange")   -> true 
startVowel("")     -> false 
startVowel("  ")     -> false 
startVowel("123")     -> false 
*/

function startVowel(str) {
const Vowels = [ 'a', 'i', 'e', 'u', 'o' ];
let str1 = str.toLowerCase();
if(Vowels.includes(str1[0])) return true;
else return false;
}

console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("  "));
console.log(startVowel("123"));

/*5
Average of Edges 
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers. 

Examples: 
averageOfEdges(0, 0, 0)   -> 0 
averageOfEdges(0, 0, 6)   -> 3 
averageOfEdges(-2, -2, 10)   -> 4 
averageOfEdges(-3, 15, -3)   -> 6 
averageOfEdges(10, 13, 20)   -> 15
*/
function averageOfEdges(num1, num2, num3) {
let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);

const average = (max + min) / 2;
return average;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));


/*6
Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 

Examples: 
replaceFirstLast("")         ->  "" 
replaceFirstLast("Hello")       ->  "oellH" 
replaceFirstLast("Tech Global")     -> "lech GlobaT" 
replaceFirstLast("A")       -> "" 
replaceFirstLast("    A      ")      -> ""
*/

function replaceFirstLast(str) {
let str1 = str.trim();
let first = str1[0];
let last = str1.slice(-1);
let mid = str1.slice(1, str.length -1);
let newstr = last + mid + first;

if(str1.length < 2) return '';
return newstr;
}

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));


/*7
Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters. 

Examples: 
swap4("abc")       -> "" 
swap4("JavaScript")      -> "riptScJava" 
swap4("TechGlobal")     -> "obalGlTech" 
swap4("")         -> "" 
swap4("  ")       -> "" 
swap4("Apple")       -> "" 
*/

function swap4(str) {
let first = str.slice(0, 4);
let last = str.slice(-4);
let mid = str.slice(4, str.length -4);

let result = last + mid + first;

if(str.length < 8) return '';

return result;
}

console.log(swap4("abc") );
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4("") );
console.log(swap4("  "));
console.log(swap4("Apple"));

/*8
Swap First and Last Words 
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 

Examples: 
swapFirstLastWord("Hello World")      -> "World Hello" 
swapFirstLastWord("I like JavaScript")   -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")     -> "bar bar foo foo" 
swapFirstLastWord("")         -> "" 
swapFirstLastWord("  ")         -> "" 
swapFirstLastWord("Hello")        -> "" 
swapFirstLastWord("Hello   ")       -> "" 
*/

function swapFirstLastWord(str){
str = str.trim();

if(str.includes(' ')){
    let firstWord = str.slice(0, str.indexOf(' '))
    let lastWord = str.slice(str.lastIndexOf(' ') + 1)
    let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1)
    return lastWord + middle + firstWord
}

else return ""
}


console.log(swapFirstLastWord("Hello World") );
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord("") );
console.log(swapFirstLastWord("  ") );
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello   "));

/*9
Count Positive Numbers 
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.  

Examples: 
countPos([-45, 0, 0, 34, 5, 67])     -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4 
countPos([0, -1, -2, -3])       -> 0
*/

function countPos(arr) {
let count = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) count++;
}
return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));


/*10
Find Even Numbers 
Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 

Examples: 
getEvens(2, 7)    -> [ 2, 4, 6 ] 
getEvens(17, 5)    -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)    -> [ 4 ] 
getEvens(3, 3)    -> [ ]
*/

function getEvens(num1, num2) {
let max = Math.max(num1, num2);
let min = Math.min(num1, num2);

const arr = [];

for(let i = min; i <= max; i++) {
    if(i % 2 === 0) arr.push(i);
}
return arr;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));


/*11********************
Find Numbers Divisible By 5 
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
Examples: 
getMultipleOf5(3, 17)    -> [ 5, 10, 15] 
getMultipleOf5(23, 5)    -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)      -> [ 5 ] 
getMultipleOf5(2, 4)      -> [ ] 
*/

function getMultipleOf5(n1, n2) {

if (n1 > n2) {
    [n1, n2] = [n2, n1];
}

const multiplesOf5 = [];

for (let i = n1; i <= n2; i++) {
    if (i % 5 === 0) {
        multiplesOf5.push(i);
    }
}

return multiplesOf5;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5) );
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4) );

/*12
Count Negative Numbers 
Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.  

Examples: 
countNeg([-45, 0, 0, 34, 5, 67])     -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123])   -> 2 
countNeg([0, -1, -2, -3])       -> 3
*/

function countNeg(arr) {
let count = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) count++;
}
return count;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));
console.log(countNeg([0, -1, -2, -3]));


/*13
Count A 
Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked. 
NOTE: Ignore case sensitivity.  

Examples: 
countA("TechGlobal is a QA bootcamp")       -> 4 
countA("QA stands for Quality Assurance")     -> 5 
countA("Cypress")             -> 0
*/

function countA(str) {
let str1 = str.split('');
let count = 0;

for(let i = 0; i < str1.length; i++) {
    if(str[i].includes('A') || str[i].includes('a')) count++;
}
return count;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));


/*14
Count Words 
Write a function named countWords() which takes a string argument and returns the total 
count of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. 

Examples: 
countWords("     Javascript is fun       ")         -> 3 
countWords("Cypress is an UI automation tool.    ")     -> 6  
countWords("1 2 3 4")             -> 4
*/

function countWords(str) {
let str1 = str.trim().split(' ');
if(str1.length >= 1) return str1.length;
}

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));


// const countWords2 = (str) => str.trim().split(' ').length


/*15
Factorial 
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 

Examples: 
factorial(5)     -> 120 
factorial(4)    -> 24 
factorial(0)    -> 1 
factorial(1)    -> 1
*/

const factorial = (num) => num === 0 || num === 1? 1: num * factorial(num - 1);

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*16**************
Count 3 or Less 
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked. 

Examples: 
count3OrLess("Hello")         -> 0 
count3OrLess("Hi John")         -> 1 
count3OrLess("JavaScript is fun")       -> 2 
count3OrLess("My name is John Doe")     -> 3 
count3OrLess("")           -> 0 
*/

function count3OrLess(str) {
let words = str.split(' ').filter(word => word.length > 0);
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 3) {
        count++;
    }
}
return count;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));


/*17
Remove Extra Spaces 
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked. 

Examples: 
removeExtraSpaces("Hello")           -> "Hello" 
removeExtraSpaces("    Hello    World  ")       -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")    -> "JavaScript is fun” 
removeExtraSpaces("")             -> "" 
*/

// return str.trim().replace(/\s+/g, ' ');
const removeExtraSpaces = (str) => str.trim().split(' ').filter(s => s.length > 0).join(' ');


console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("    Hello    World  "));
console.log(removeExtraSpaces("   JavaScript is        fun"));
console.log(removeExtraSpaces(""));


/*18
Middle Number 
Write a function named middleInt() which takes three number arguments and return the middle 
number.  

Examples: 
middleInt(1, 2, 2)     -> 2 
middleInt(5, 5, 8)     -> 5 
middleInt(5, 3, 5)     -> 5 
middleInt(1, 1, 1)     -> 1 
middleInt(-1, 25, 10)   -> 10
*/

const middleInt = (num1, num2, num3) =>  [num1, num2, num3].sort((a, b) => a - b)[1];
/*
function middleInt(n1, n2, n3) {
let max = Math.max(n1, n2, n3);
let min = Math.min(n1, n2, n3);

if(max === n1 && min === n2) return n3;
if(max === n2 && min === n3) return n1;
if(max === n3 && min === n1) return n2;
if(max === n2 && min === n1) return n3;
}
*/
console.log(middleInt(1, 2, 2));    
console.log(middleInt(5, 5, 8));    
console.log(middleInt(5, 3, 5));    
console.log(middleInt(1, 1, 1));    
console.log(middleInt(-1, 25, 10));    

/*19
First Duplicate Element 
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same. 

Examples: 
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])      -> 3 
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])      -> 5 
firstDuplicate([ 5, '5', 3, 7, 4 ])      -> -1 
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])    -> 'abc' 
firstDuplicate([ 1, 2, 3])        -> -1 
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])     -> -1 
*/

function firstDuplicate(arr){
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] === arr[j]) return arr[i];
    }
}
return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]));

/*20
Find All Duplicate Elements 
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same. 

Examples: 
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])      -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])          -> [ ] 
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])    -> [ 'foo', 'a’ ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])       -> [ ]
*/

function getDuplicates(arr){
let arr1 = [];
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] === arr[j] && !arr1.includes(arr[i])) arr1.push(arr[i]);
    }
    
}
return arr1;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));


/*21
Count Vowels 
Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked. 
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i 

Examples: 
countVowels("Hello")       -> 2 
countVowels("JavaScript is fun")    -> 5 
countVowels("")         -> 0
*/

function countVowels(str) {
let str1 = str.toLowerCase().split('');
const Vowels = [ 'a', 'i', 'e', 'u', 'o' ];
let count = 0;

for(let i = 0; i < str.length; i++) {
    if(Vowels.includes(str[i])) count++;
}
return count;
}

console.log(countVowels("Hello"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/*22
Reverse String Words 
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked. 
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string. 

Examples: 
reverseStringWords("Hello World")      -> "olleH dlroW" 
reverseStringWords("I like JavaScript")     -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")       -> "olleH" 
reverseStringWords("")         -> "" 
reverseStringWords(" ")         -> ""
*/

function reverseStringWords(str) {
return str.trim().split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Example usage
console.log(reverseStringWords("Hello World"));          // Output: "olleH dlroW"
console.log(reverseStringWords("I like JavaScript"));    // Output: "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello"));                 // Output: "olleH"
console.log(reverseStringWords(""));                      // Output: ""
console.log(reverseStringWords(" "));                     // Output: ""


/*23
Count Consonants 
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked. 
NOTE: A letter that is not vowel is considered as a consonant letter. 

Examples: 
countConsonants("Hello")         -> 3 
countConsonants("Hello World")       -> 8 
countConsonants("JavaScript is fun")     -> 12 
countConsonants("")         -> 0
*/

const countConsonants = (str) => {
const Vowels = [ 'a', 'i', 'e', 'u', 'o' ];
let count = 0;


for(let i = 0; i < str.length; i++) {
    if(!Vowels.includes(str[i])) count++;
}
return count;
}

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

/*24
Count Multiple Words 
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked. 
NOTE: Be careful about the extra whitespaces before and after the array element. 

Examples: 
countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])     -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])     -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])     -> 4 
countMultipleWords([ ])               -> 0 
*/

const countMultipleWords = (arr) => arr.reduce((count, str) => str.trim().includes(' ')? count + 1 : count, 0)
// let count = 0;

// arr.forEach(e => {
//     if(e.trim().includes(' ')) count++;
// });

// return count;
console.log(countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([ ]));


/*24
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
composed with below requirements when invoked. 
•  You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each 
number. 
•  You will need to convert numbers divisible by 3 to 'Fizz' 
•  You will need to convert numbers divisible by 5 to 'Buzz' 
•  You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’ 
•  The rest will stay the same. 
NOTE: Make your code dynamic that works for any numbers. 
Assume you will not be given negative numbers. 

Examples: 
fizzBuzz(13, 18)    -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)    -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)    -> "Buzz" 
fizzBuzz(9, 6)    -> "Fizz | 7 | 8 | Fizz" 
*/
function fizzBuzz(n1, n2) {
let min = Math.min(n1, n2);
let max = Math.max(n1, n2);

let array = [];

for(let i = min; i <= max; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) array.push('FizzBuzz');
        else array.push('Fizz');
    }
    else if (i % 5 === 0) array.push('Buzz');
    else array.push(i);
}
return array.join(' | ');
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5) );
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));


/*25
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked. 
NOTE: Palindrome: It is a word that is read the same backward as forward 
Examples: kayak, civic, madam 
NOTE: your function should ignore case sensitivity 

Examples: 
isPalindrome("Hello")   -> false 
isPalindrome("Kayak")   -> true 
isPalindrome("civic")   -> true 
isPalindrome("abba")   -> true 
isPalindrome("ab  a")   -> false 
isPalindrome("123454321")   -> true 
isPalindrome("A")   -> true 
isPalindrome("")   -> true*/

const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

console.log(isPalindrome("Hello") );
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));


/*26
Prime Number 
Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked. 
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number. 
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31... 
NOTE: The smallest prime number is 2 and there is no negative prime numbers. 

Examples: 
isPrime(5)   -> true 
isPrime(2)   -> true 
isPrime(29)   -> true 
isPrime(-5)  -> false 
isPrime(0)  -> false 
isPrime(1)  -> false 
*/

const isPrime = (num) =>  num > 1 && num % num === 0? true: false;

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

/*27
Add Two Arrays 
Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different. 

Examples: 
add([3, 0, 0, 7, 5, 10], [6, 3, 2])         -> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])     -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])         -> [0, 0, 0, 0]
*/

function add(arr1, arr2) {
if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
for(let i = 0; i < arr2.length; i++){
    arr1[i] += arr2[i];
}

return arr1
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));  // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));  // [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));  // [0, 0, 0, 0]

/*28
No Elements With A 
Write a function named noA() which takes an array of strings as argument and will return a 
new array with all elements starting with "A" or "a" replaced with "###". 

Examples: 
noA(["javascript", "hello", "123", "xyz"])     ->  ["javascript", "hello", "123", "xyz"] 
noA(["apple", "123", "ABC", "javascript"])     ->  ["###", "123", "###", "javascript"] 
noA(["apple", "abc", "ABC", "Alex", "A"])     ->  ["###", "###", "###", "###", "###"] 
*/
const noA = (arr) => arr.map(i =>  i.toLowerCase()[0] === 'a' ? '###' : i)

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));
/*29
No Elements Divisible By 3 and 5 
Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below. 
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101 

Examples: 
no3and5([7, 4, 11, 23, 17])       -> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])       -> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])     -> [99, 11, 100, 13, 14, 101]
*/
function no3and5(arr) {
return arr.map(num => {
    if(num % 3 === 0 && num % 5 === 0) {
        return 101; 
    } else if (num % 5 === 0) {
        return 99; 
    } else if (num % 3 === 0) {
        return 100; 
    } else {
        return num; 
    }
});
}
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));
/*30
No Elements Equals 13 
Write a function named no13() which takes an array of numbers as argument and return a new 
array with all 13s replaced with 0s.  

Examples: 
no13([1, 2, 3 ,4])       -> [1, 2, 3 ,4]  
no13([13, 2, 3])       -> [0, 2, 3] 
no13([13, 13, 13 , 13, 13])     -> [0, 0, 0, 0, 0] 
no13([])         -> [] 
*/

function no13(arr) {
return arr.map(num => {
    if (num !== 13) {
        return num; 
    } else if (num === 13) {
        return 0; 
    } 
});
}


// const no13 = (arr) => arr.filter(num => num !== 13 || num === 13? num: 0);

console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));

/*31
Remove Duplicates 
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed. 

Examples: 
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])      -> [10, 20, 35, 60, 70] 
removeDuplicates([1, 2, 5, 2, 3])           -> [1, 2, 5, 3] 
removeDuplicates([0, -1, -2, -2, -1])         -> [0, -1, -2] 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"] 
removeDuplicates(["1", "2", "3", "2", "3"])         -> ["1", "2", "3"] 
*/
const removeDuplicates = (arr) => {
let arr1 = [];

arr.forEach((ele) => {
    if(!arr1.includes(ele)) arr1.push(ele)
});
return arr1;
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


/*33
No Digits 
Write a function named noDigit() which takes a string argument and returns a new string with 
all digits removed from the original string. 

Examples: 
noDigit("")           -> "" 
noDigit("Javascript")       -> "Javascript" 
noDigit("123Hello")         -> "Hello" 
noDigit("123Hello World149")     -> "Hello World” 
noDigit("123Tech456Global149")     -> "TechGlobal" 
*/
const noDigit = (str) => str.split('').filter(i => i < '0' || i > '9').join('');

console.log(noDigit(""))
console.log(noDigit("Javascript"))
console.log(noDigit("123Hello"))
console.log(noDigit("123Hello World149"))
console.log(noDigit("123Tech456Global149"))

/*34
No Vowel 
Write a function named noVowel() which takes a string argument and returns a new string 
with all vowels removed from the original string. 

Examples: 
noVowel("TechGlobal")   -> "TchGlbl" 
noVowel("AEOxyz")   -> "xyz" 
noVowel("Javascript")   -> "Jvscrpt" 
noVowel("")   -> "" 
noVowel("125$")   -> "125$"
*/
const noVowel = (str) => str.split('').filter(i => !('aeiuo'.includes(i.toLowerCase()))).join('');

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));


/*35
Sum Of Digits 
Write a function named sumOfDigits() which takes a string argument and returns sum of all 
digits from the original string.  

Examples: 
sumOfDigits("Javascript")       -> 0 
sumOfDigits("John’s age is 29")     -> 11 
sumOfDigits("$125.0")       -> 8 
sumOfDigits("")         -> 0 
*/
// const sumOfDigits = (str) => str.split('').filter(i => i >= '0' && i <= '9').reduce((sum, num) => sum += Number(num), 0)
const sumOfDigits = (str) => str.split('').filter(i => i >= '0' && i <= '9').reduce((sum, num) => sum += Number(num), 0);

console.log(sumOfDigits("Javascript"));     
console.log(sumOfDigits("John's age is 29")); 
console.log(sumOfDigits("$125.0"));         
console.log(sumOfDigits("")); 

/*36
Array Factorial 
Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials. 

Examples: 
arrFactorial([1, 2, 3 ,4])     -> [1, 2, 6, 24] 
arrFactorial([0, 5])       -> [1,120] 
arrFactorial([5 , 0, 6])     -> [120, 1, 720] 
arrFactorial([])       -> []
*/

const arrFactorial = (arr) =>{
return arr.map(num => {
    let fac = 1;

    for(let i = 1; i <= num; i++){
        fac *= i;
    }
    return fac;
})   
}

console.log(arrFactorial([1, 2, 3, 4])); 
console.log(arrFactorial([0, 5]));       
console.log(arrFactorial([5, 0, 6]));    
console.log(arrFactorial([]));


