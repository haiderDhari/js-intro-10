const cities = [ ' Rome', 'Chigaco', 'Miami', 'Berlien', 'Tokyo', 'LA' ];

console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
console.log(cities[3]);
console.log(cities[4]);

for(let i = 0; i <= cities.length -1; i++) {
    console.log(cities[i]);
}


// or for of to iterate array
for(const city of cities) {
    console.log(city);
}

// log yhe numbers elements using for...of loop
const numbers = [ 10, 20, 30, 40, 23 ];

for(let i = 0; i <= numbers.length -1; i++) {
    console.log(numbers[i]);
}


for(const num of numbers) {
    console.log(num);
}


let index = 0;

while(index <= numbers.length -1) {
    console.log(numbers[index]);
    index++;
}
