// Count how many positive numbers you have in the array -> 4

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many positive numbers you have in the array -> 4

let count = 0;

for(const num of numbers) {
    if(num >= 0) count++;
}
console.log(count);

// negative
let count2 = 0;

for(const num of numbers) {
    if(num < 0) count2++;
}
console.log(count2);
 
// count every number that is not posative 
let count3 = 0;

for(const num of numbers) {
    if(num <= 0) count3++;
}
console.log(count3);

// even 
let count4 = 0;

for(const num of numbers) {
    if(num % 2 === 0) count4++;
}
console.log(count4);

// odd but not negative 
let count5 = 0;

for(const num of numbers) {
    if(num % 2 !==0 && num > 0) count5++;
}

console.log(count5);