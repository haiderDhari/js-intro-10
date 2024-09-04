const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0

let firsteven;

for(const num of nums) {
    if(num % 2 === 0) {
        firsteven = num;
        break;
    }
}

console.log(firsteven);

// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstCity = city;
        break;
    }
}
console.log(firstCity);

// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const citiesWithLength6OrMore = [];

for(const city of cities) {
    if(city.length > 5)  citiesWithLength6OrMore.push(city);
}

console.log(citiesWithLength6OrMore);


// or

console.log(cities.filter(city => city.length > 5));

// find all the cities that has I or i in it 

const cityIi = [];

for(const city of cities) {
    if(city.toLowerCase().includes('i'))  cityIi.push(city);
    
}

console.log(cityIi);


const product => (a, b) {
    return a * b
}

const printhello => {
    console.log('hello');
}

