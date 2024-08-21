// [] vs codeCharAt()

let st1 = 'techglobae';

// get a specific character
// [] vs .charAt() vs .at()
console.log(st1[0]);
console.log(st1.charAt(0));
console.log(st1.at(0));

console.log(st1[st1.length - 1]);
console.log(st1.charAt(st1.length - 1));
console.log(st1.at(st1.length - 1));

let city = 'Rome';

console.log(city[-1]);
console.log(city[-2]);
console.log(city[-3]);
console.log(city.charAt(-1));
console.log(city.at(-1));

let city = 'Rome';
console.log(city[3]);
console.log(city.charAt(2));
console.log(city.at(1));

console.log(city[4]);
console.log(city.charAt(4));
console.log(city.at(4));
// 1:30 pm 7-27-24 vedio 

// (- , +)at .undefind vs charAt .empity (+) 
console.log('good morning'.at(-3));
console.log('hi'.at(-3));
console.log('hi'.charAt(6));

let s = 'Techgloabale';
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s[1])
console.log(s.at(-1))
console.log(s.at(2))
console.log(s.charAt(2));
