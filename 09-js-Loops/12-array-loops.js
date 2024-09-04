const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

let sum = 0;



for(let i = 2; i <= 7; i++) {
    sum += i;
}

console.log(sum);


for(let i = 2; i <= 7; i++) {
    average = sum / numbers.length;
}
console.log(average);


console.log('\n--------TASK-2--------\n');
// Find the product of all the numbers starting from the index 3 -> 3 * 2 * 2 * 7 -> 84

let product = 1;

for(let i = 3; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log(product);

// for...of

let product1 = 1;
for(const number of numbers.slice(3)) {
product1 *= number;
}

console.log(product1);

