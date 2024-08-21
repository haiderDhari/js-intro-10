const favMovie = [ 'Harry Potter', 'Godfather', 'Lorad Of The Rings' ];

let [ myfav1, myfav2, myfav3 ] = favMovie;

console.log(myfav1); //Harry Potter
console.log(myfav2); //Godfather
console.log(myfav3); //Lorad Of The Rings


const favMovie1 = [ 'Harry Potter', 'Godfather', 'Lorad Of The Rings' ];

let [ myfav11, , myfav33 ] = favMovie1;
console.log(myfav11);
console.log(myfav33);

//

const numbers = [ -3, 10, 0, 100, 200 ];
// ten, zero, twoHundred

let [ , ten, zero, ,twoHundred ] = numbers;

console.log(ten);
console.log(zero);
console.log(twoHundred);
