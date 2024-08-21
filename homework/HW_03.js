/* Requirement:
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
Test data 1:
20, 70, 25
Expected Output 1: 
false
Test data 2:
65, 80, 90
Expected Output 2: 
true  */

console.log('\n---------------TASK01---------------\n');


let ran1 = Math.floor(Math.random() * 100) + 1;
let ran2 = Math.floor(Math.random() * 100) + 1;
let ran3 = Math.floor(Math.random() * 100) + 1;
averageN = (ran1 + ran2 + ran3) / 3;

if(averageN >= 50) {
    console.log(true);
}
else {
    console.log(false);
}



/* Requirement:
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH
Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH
Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH
Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH  */

console.log('\n---------------TASK02---------------\n');


let r1 = Math.floor(Math.random() * 3) + 1;
let r2 = Math.floor(Math.random() * 3) + 1;
let r3 = Math.floor(Math.random() * 3) + 1;


if (r1 !== r2 && r1 !== r3 && r2 !== r3 ) {
    console.log("NO MATCH");
}
else if (r1 === r2 && r1 === r3 && r2 === r3) {
    console.log("TRIPLE MATCH");
}
else if (r1 === r2 || r1 === r3 || r2 === r3) {
    console.log("DOUBLE MATCH");
}



/* Requirement:
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true  */

console.log('\n---------------TASK03---------------\n');


function hasA(str) {
    if (str.includes('A') || str.includes('a')) return true;
    else return false;
}
console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA("Apple"));
console.log(hasA(" "));



/* Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"  */

console.log('\n---------------TASK04---------------\n');


function doubleOrTripleWord(str1) {
    if(str1.length % 2===0) return str1.repeat(3);
    else return str1.repeat(2);
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));



/* Requirement:
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""  */


console.log('\n---------------TASK05---------------\n');


function firstWord(str2) {
    if (str2.indexOf(' ') === -1)
      return str2;
    else
return str2.substring(0, str2.indexOf(' '));

}


console.log(firstWord("Hello World") );
console.log(firstWord("I like JavaScript")  );
console.log(firstWord("Hello") );
console.log(firstWord(""));
console.log(firstWord("    "));



/* Requirement:
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""  */

console.log('\n---------------TASK06---------------\n');

function lastWord(str) {
    return (str.split(' ').slice(-1));
    }
console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord("    "));



/* Requirement: 
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> "" */

console.log('\n---------------TASK07---------------\n');

function firstLastWord(str4) {
if (str4.includes(' ')) return (str4.substring(0, str4.indexOf(' '))) + ((str4.split(' ').slice(-1)));
else return ("");
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord("    "));



/* Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false  */

console.log('\n---------------TASK08---------------\n');

function startVowel(str) {
    //str = str.toLowerCase();
    //return str.startsWith('a') || str.startsWith('e') || str.startsWith('i') || str.startsWith('u') || str.startsWith('o')

    return 'aeiouAEIOU'.includes(str[0])
}

console.log(startVowel(" "));


/* Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.
Examples:
swap4("abc")  -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""  */

console.log('\n---------------TASK09---------------\n');


function swap4(str) {//JavaScript
    str = str.trim()

    if(str.length >= 8){
        let first4 = str.slice(0, 4)//Java
        let middle = str.slice(4, -4)//Sc
        let last4 = str.slice(-4)//ript
        return last4 + middle + first4
    }
    return ""
}

console.log(swap4("TechGloable"));


/* Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.
Examples:
swapFirstLastWord("Hello World")  -> "World 
Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like 
I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo 
foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""  */

console.log('\n---------------TASK010---------------\n');

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


console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("i like javescript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord("hello"));
console.log(swapFirstLastWord("hello  "));
console.log(swapFirstLastWord("  "));
console.log(swapFirstLastWord(""));


