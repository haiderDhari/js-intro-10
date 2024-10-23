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

const countWords = (str) => str.trim().split(' ').length

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));



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
    const removeExtraSpaces = (str) => str.trim().split(' ').filter(ele => ele.length > 0).join(' ');


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

const countMultipleWords = (arr) => arr.reduce((count, curr) => curr.trim().includes(' ')? count + 1 : count, 0);

// const countMultipleWords = (arr) => arr.reduce((count, str) => str.trim().includes(' ')? count + 1 : count, 0)
// let count = 0;

    // arr.forEach(e => {
    //     if(e.trim().includes(' ')) count++;
    // });

    // return count;
console.log(countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([ ]));


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
/*
function no13(arr) {
    return arr.map(num => {
        if (num !== 13) {
            return num; 
        } else if (num === 13) {
            return 0; 
        } 
    });
}
*/

const no13 = (arr) => arr.filter(num => num !== 13 || num === 13? num: 0);

console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));


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
