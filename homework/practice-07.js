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

function firstDuplicate2(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}

console.log(firstDuplicate2([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate2([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate2([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate2([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate2([ 1, 2, 3]));
console.log(firstDuplicate2([ 'foo', 'abc', '123', 'bar' ]));