const numbers = [10, 5, 100, 77, 50, 65, 0]; 

// Find all the numbers that are 50 or more -> [100, 77, 50, 65]


const result = numbers.filter((num) => num >= 50);
console.log(result);

const result1 = numbers.map((num) => num >= 50);
console.log(result1);



numbers.forEach((num) => {
    if(num >= 50) console.log(num);
});


for(const num of numbers) {
    if(num >= 50) console.log(num);
}

numbers.map((num) => {
    if(num >= 50) console.log(num);
});


const fruits = ['Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];

// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2


console.log(fruits.filter((item) => item.toLowerCase().includes('apple')));


console.log(fruits.filter(item => item.toLowerCase().includes('a') >= 0).length);


const hasi = fruits.filter((item) => item.toLowerCase().includes('i')); 

console.log(hasi.length);























