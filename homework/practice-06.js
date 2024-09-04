
/*
Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])     -> 1
*/

console.log('\n------------------TASK01------------------\n');

function firstPos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) return arr[i];
    }
}

console.log(firstPos([0, 3, -9,  5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2]));


/* Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg[-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2  */

function lastNeg(arr) {
for( let i = arr.length -1 ; i >= 0; i--) {
if(arr[i] < 0) return arr[i];
}
}

console.log(lastNeg([0, 3, -9,  5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));

console.log('\n---------------TASK03-----------\n');
/*
Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"]) 	-> "yellow"
firstLongest(["Apple", "Banana", "Orange"]) 	-> "Banana"
firstLongest(["purple", "yellow", "orange"]) 	-> "purple"
*/

function firstLongest(arr) {
    let theLongestString = '';
    let maxLength = 0;

    for(const str of arr) {
        if(str.length > maxLength) {
            theLongestString = str;
            maxLength = str.length;
        }
    }
    return theLongestString;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));


/* 
Requirement:
Write a function named as lastShortest() which takes 
an array as an argument and returns the shortest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the shortest count 
of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])  -> 
"red"
lastShortest(["Apple", "Banana", "Mango"])  -> 
"Mango"
lastShortest(["white", "yellow", "brown"])  -> 
"brown"
*/
function lastShortest(array) {
    let lastShortest = array[0];

    for(const str of array) {
        if(str.length <= lastShortest.length) lastShortest = str;
    }
    return lastShortest;
}

console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));



/*
Requirement:
Write a function named as max() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8])  -> 8
max([-2, 0, -7, 10, -5])  -> 10
max([1, 2, 3, -2])                 -> 3
*/
function max(arr) {
    let greatest = arr[0];

    for (let i = 1; i < arr.length; i++){
     if  (arr[i] > greatest) {
        greatest = arr[i]
     }
    }
    return greatest;
}

console.log(max([0, 3, -9,  5, 8]));

/*
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/
function min(arr) {
    let smallest = arr[0];

 for  (let i = 1; i < arr.length; i++){
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
 }
 return smallest;
    }



console.log(min([ -2, 0, -7, 10, -5 ])); // -7
console.log(min([0, 3,  5, 8])); // 0


/*
Requirement:
Write a function named as commonElements() which takes 2 arrays 
as arguments and returns the all the matching elements from the 
both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ])  -> [ 20, 
50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])  -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ])  -> 
["abc" ]
*/
function commonElements(arr1, arr2) {
    let common = [];

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                if(!common.includes(arr1[i])) common.push(arr1[i]);     
            }   
            
        }
    }
    return common;
}
console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]));
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]));
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));


// 
console.log('\n------------------TASK07------------------\n');
function commonElements(arr1, arr2) {
    let arrayMatches = [];
    for(const num of arr1) {
        if (arr2.includes(num) && !arrayMatches.includes(num)) arrayMatches.push(num);
    }
    return arrayMatches;
}