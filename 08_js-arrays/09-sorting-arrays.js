const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander'];


// uppercase comes before lowercase so Jane before alex (sorting) alphapatichly

console.log(names.sort()); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]


const numbers = [ 1, 40, 2, 3, 10, 100 ];

const numberssorted = numbers.sort();

console.log(numbers);
console.log(numberssorted);

// how to order numbers array

const nums = [ 1, 40, 2, 3, 10, 100 ];

nums.sort((a, b) => a - b);
console.log(nums); // [ 1, 2, 3, 10, 40, 100 ]


