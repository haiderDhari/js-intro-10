// fill the string at the begining 
let n11 = '123', n21 = '5', n31 = '5000';

console.log(n11.padStart(4, ' '))
console.log(n21.padStart(4, ' '))
console.log(n31.padStart(4, ' '))

//ex: fill the string at the end 
let n1 = '123', n2 = '5', n3 = '5000';
console.log(n1.padEnd(10, ' '))
console.log(n2.padEnd(10, ' '))
console.log(n3.padEnd(10, ' '))


// Ex:
let s = 'hi';
console.log(s.repeat(5));
console.log(s.valueOf());

let s1 = 'TechGloable';
console.log(s.indexOf('L'))
console.log(s.lastIndexOf('L'))
console.log(s.replace('0', '###').toUpperCase());