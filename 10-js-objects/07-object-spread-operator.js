const arr1 = [ 1, 2, 3 ];
const arr2 = [ 3, 4, 5, 6 ];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// 
const car = {
    make: 'Tesla',
    model: 'S',
    year: 2024
};

console.log(car);


const car2 = {
    make: 'Tesla',
    model: 'S',
    year: 2024,
    selfDrive: true
};

console.log(car2);
// or
const car3 ={
    ...car2,
    color: 'black'
};

console.log(car3);
