// spreading arrays
const num1 = [ 1, 2, 3, 4 ];

const num2 = [...num1, 5, 6]; 


// num1.forEach((ele) => num2.push(ele));

console.log(num2);

// num2.push(5, 6);
// console.log(num2);

console.log(Math.max(...num2));
console.log(Math.min(...num2));

let str = 'haider';
console.log(str[3]);