/* Requirement:
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("")  -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")  -> true
hasLowerCase("125$")  -> false
hasLowerCase("   a   ")  -> true */
console.log('\n---------------TASK01---------------\n');

const hasLowerCase = (str) => str.split('').filter(i => i >= 'a' && i <= 'z').length > 0;

console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));


/*
Requirement:
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:
noZero([1])  -> [1]
noZero( [1, 1, 10] )  -> [1, 1, 10] 
noZero([0, 1, 10])  -> [1, 10]
noZero([0, 0, 0])  -> []
noZero([10, 100 0]) -> [10, 100]
*/
console.log('\n---------------TASK02---------------\n');

const noZero = (arr) => {
   return  arr.filter((number) => number > 0);
}


console.log(noZero([1]));
console.log(noZero( [1, 1, 10] ));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100 ,0]));


/*
Requirement:
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
*/
console.log('\n---------------TASK03---------------\n');

function numberAndSquare(arr) {
    return arr.map(num => [num, num * num]);
}

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]) );
console.log(numberAndSquare([0, 1, -10]));



/*
Requirement:
Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello")  -> false
containsValue(["abc", "def", "123"], "Abc")  -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
*/
console.log('\n---------------TASK04---------------\n');

function containsValue(arr, str) {
    return arr.includes(str);
}

console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));


/*
Requirement:
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".
Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/
console.log('\n---------------TASK05---------------\n');

function reverseSentence(str) {
    const words = str.split(' ');
    
    if (words.length < 2) {
        return "There is not enough words!";
    }
    
    const reversedWords = words.reverse().map(word => word.toLowerCase());
    return reversedWords.join(' ');
}

console.log(reverseSentence("Hello"));
console.log(reverseSentence("Javascript is fun") );
console.log(reverseSentence("This is a sentence"));


/*
Requirement:
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
fun" 
removeStringSpecialsDigits("Cypress")  -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")  -> "Automation"
*/
console.log('\n---------------TASK06---------------\n');

function removeStringSpecialsDigits(str) {
    return str.replace(/[^a-zA-Z\s]/g, '');
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));                 
console.log(removeStringSpecialsDigits("Automation123#$%"));

/*
Requirement:
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> 
["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", 
""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", 
"tool"]
*/
console.log('\n---------------TASK07---------------\n');

function removeArraySpecialsDigits(arr) {
    return arr.map(str => str.replace(/[^a-zA-Z\s]/g, ''));
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); 
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));       
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));  


/*
Requirement:
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 
-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) -> 
["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/
console.log('\n---------------TASK08---------------\n');

function getCommons(arr1, arr2) {
    const commons = [];
    
    for (const word of arr1) {
        if (arr2.includes(word) && !commons.includes(word)) {
            commons.push(word);
        }
    }
    
    return commons;
}

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]));
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); 


/*
Requirement:
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
Examples:
noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
*/
console.log('\n---------------TASK09---------------\n');

function noXInVariables(arr) {
    return arr.reduce((acc, item) => {
        if (typeof item === 'string') {
            const str = item.replace(/[^a-wA-W\s]/g, '');
            if (str) {
                acc.push(str);
            }
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
}

console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]));
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));
