
const arr1 = [1, 2], arr2 = [55, 56], arr3 = [ 101, 102, 103 ];

console.log(arr1);
console.log(arr2);
console.log(arr3);

const r1r2 = arr1.concat(arr2);
console.log(r1r2);

const r1r2r3 = arr1.concat(arr2, arr3);
console.log(r1r2r3);

console.log(arr3.concat(arr1));

console.log(arr1 + arr2); // we can not use this one ( + )

// 
const obj1 = ['watch', 'phone', 'laptop']; //[ 'watch', 'phone', 'laptop' ]
const obj2 = ['camera', 'desk']; //[ 'watch', 'phone', 'laptop' ]
console.log(obj1.concat('mug', 'remote'));
console.log(obj1);
//or we use spread operator (...) 
console.log(...obj1); // watch phone laptop

const obj3 = obj1.concat(obj2);
const obj4 = [obj1[0], obj1[1], obj1[2], obj2[0], obj2[1]];
const obj5 = [...obj1, ...obj2];

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);

const nums = [10, 20, 30, 25, 99, 1];
// find max and min
// max= 99
// min = 1

console.log(Math.min(nums)); // NaN
console.log(Math.max(nums)); // NaN

console.log(Math.min(...nums)); 
console.log(Math.max(...nums));

