const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);

let size = myNumberArray.length;
console.log(`the size of the array =`, size);
console.log(myNumberArray[2]);

myNumberArray[4] = 99;
console.log(myNumberArray[4]);
console.log(myNumberArray[0]);

console.log(myNumberArray[myNumberArray.length - 1]);

// creating an array using constractor, but dont use it.
const myWords = new Array('I','like','arrays');
console.log(myWords);

///
const arr = [];
console.log(arr);
console.log(arr.length);

arr[5] = 10;
console.log(arr);

///

const mix = [10.777, 'hello', null, undefined, NaN, 2=='2'];
console.log(mix.length);
result = mix[1].slice(0, 2);
console.log(result);
result1 = mix[0].toFixed(2);
console.log(result1);


const numbers = [5, 10, 15, 7];
