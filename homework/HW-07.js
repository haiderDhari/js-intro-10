/* Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false  */
console.log('\n---------------TASK01---------------\n');


function hasUpperCase(str) {
    for(let i = 0; i < str.length; i++) {
      let str2 = str.charCodeAt(i);
      if(str2 >= 65 && str2 <= 90) {
        return true;
      }
    }
    return false;
  }
  
console.log(hasUpperCase("javascript") );
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));
  
/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/
console.log('\n---------------TASK02---------------\n');


function noDigit(str) {
    let result = ('');
    for(let i = 0; i < str.length; i++) {
      let str2 = str.charCodeAt(i);
        if(str2 < 48 || str2 > 57) {
        result += str[i];
      }
 }
    return result;
}
  

console.log(noDigit("")); 
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")*/
console.log('\n---------------TASK03---------------\n');

function noVowel(str) {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const str2 = str[i];
      const charCode = str.charCodeAt(i);
        if (!vowels.includes(str2)) {
        result += str2;
      }
    }
  
    return result;
}

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

/* Task-4 
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []*/
console.log('\n---------------TASK04---------------\n');

function no13(arr) {
 return arr.map(ele => ele === 13 ? 0 : ele);
}


console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log([]);

/*
Task-5
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10*/
console.log('\n---------------TASK05---------------\n');
function middleInt(n1, n2, n3) {
  let max = Math.max(n1, n2, n3);
  let min = Math.min(n1, n2, n3);

  if(max === n1 && min === n2) return n3;
  if(max === n2 && min === n3) return n1;
  if(max === n3 && min === n1) return n2;
  
   }
  


console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));


/*
Task-6
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0*/
console.log('\n---------------TASK06---------------\n');

function sumOfDigits(str) {
  let sum = 0;
  for (const ele of str) {
      if (!isNaN(ele)) {
          sum += Number(ele);
      }
  }
  return sum;
}


console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

/*
Task-7
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []*/
console.log('\n---------------TASK07---------------\n');

function arrFactorial(arr) {
  const factorial = (n) => n === 0 || n === 1? 1: n * factorial(n-1);
    return arr.map(factorial);
}

console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]));
/*Task-8
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
*/
console.log('\n---------------TASK08---------------\n');

function categorizeCharacters(word) {
  const letters = [];
  const digits = [];
  const specials = [];

  for (const ele of word) {
      if ((ele.charCodeAt(0) > 65 && ele.charCodeAt(0) < 90) || (ele.charCodeAt(0) > 96 && ele.charCodeAt(0) < 122)) {
          letters.push(ele);
      } else if (ele.charCodeAt(0) > 48 && ele.charCodeAt(0) < 57) {
          digits.push(ele);
      } else {
          specials.push(ele);
      }
  }

  return [letters.join(''), digits.join(''), specials.join('')];
}

console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));