// push , pop

const names = [ 'Alex', 'John' ];

console.log(names);

// add on more 
//names[2] = 'Mariia';
//names[3] = 'Bermet';

console.log(names);

// another way push always add to the end of the array
names.push('mariia');
console.log(names);

let result = names.push('jane', 'max', 'data');

console.log(result);
console.log(names);

// Removing elemnts from the end of the array [ pop ]

names.pop(); // remove and return data 
names.pop(); // = = = max
names.pop(); // = = = jane

console.log(names);

// shifting(remove) and unshifting(add) elements

const numbers = [ 10, 20, 30 ];
console.log(numbers);
// adding to the negining of the array
numbers.unshift(99);

console.log(numbers);

numbers.unshift(15, 23);
console.log(numbers);
// removing 
numbers.shift(); // 15
numbers.shift(); // 23
numbers.shift(); // 99

console.log(numbers);

console.log(numbers.shift());
