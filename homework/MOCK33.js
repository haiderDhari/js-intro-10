
/*1
Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
Examples: 
replaceFirstLast("")      
replaceFirstLast("Hello")     
replaceFirstLast("Tech Global")    
replaceFirstLast("A")     
replaceFirstLast("    A  ")
*/
function replaceFirstLast(str) {
    let str1 = str.trim();
    let first = str1[0];
    let last = str1.slice(-1);
    let mid = str1.slice(1, str.length - 1);
    let newstr = last + mid + first;

    if (str1.length < 2) return '';
    return newstr;
}
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));

/*2
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
function swapFirstLastWord(str) {
    let str1 = str.trim();

    if (str1.includes(' ')) {
        let firstWord = str1.slice(0, str1.indexOf(' '))
        let lastWord = str1.slice(str1.lastIndexOf(' ') + 1)
        let middle = str1.slice(str1.indexOf(' '), str1.lastIndexOf(' ') + 1)
        return lastWord + middle + firstWord
    }

    else return ""
}
console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("  "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello   "));

/*3
Factorial 
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
Examples: 
factorial(5)    
factorial(4)   
factorial(0)   
factorial(1)   -> 120 -> 24 -> 1 -> 
*/
const factorial = (num) => num === 0 || num === 1 ? 1 : num * factorial(num - 1);

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*4
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

/*5
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
function firstDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));





















