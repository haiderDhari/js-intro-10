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

function  replaceFirstLast(str) {
    let str1 = str.trim();
    let first = str1[0];
    let last = str1.slice(-1);
    let mid = str1.slice(1, str.legnth -1);
    let newstr = last + mid + first;

    if(str1.legnth < 2) return '';
    return newstr;
}

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));