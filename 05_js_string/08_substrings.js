// substring() = slice

let s = 'TechGlobal';
// starts with 0 and 4 not included so it gives us 0 to 3
console.log(s.substring(0,4));
console.log(s.substring(2,6));
console.log(s.slice(2,6));
console.log(s.substring(4,7));
console.log(s.slice(4,7));
console.log(s.substring(4,10));
// or 
console.log(s.substring(4));
console.log(s.substring(4));
console.log(s.substring(7));
console.log(s.slice(7));

// differnce substring() vs slice()
let L = 'JavaScript';
console.log(L.slice(-1));
console.log(L.slice(-2));
console.log(L.slice(-6));

// get the last 3 characters 
console.log(L.substring(7));
console.log(L.substring(L.length-3));
console.log(L.slice(7));
console.log(L.slice(-3));
// we use slice in the case of negative (-)

// get sc
let L1 = 'JavaScript';
console.log(L.substring(4,6));
console.log(L.slice(-5,-6));

//ex: get sun
let T = 'Today is Sunday';
console.log(T.slice(9,12));
console.log(T.substring(9,12));
console.log(T.substring(3,0));
console.log(T.slice(3,0));

// difference
// Ex: 'Hello'.substring(3, 1);
console.log('Hello'.substring(3, 1));
console.log('Hello'.slice(3, 1));// doesnt work
// Ex:
console.log('morning'.substring(-5, -3));// doesnt work
console.log('morning'.slice(-5, -3));
// Ex:
console.log('computer'.substring(-4));
console.log('computer'.slice(-4));


// Ex:
console.log('Batch-10'.substring(-10, 100));
console.log('Batch-10'.substring(-8, 80));
console.log('Batch-10'.slice(3, 100));
console.log('Batch-10'.slice(5, 100));

// Ex: