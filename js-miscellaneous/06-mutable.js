const arr1 = [ 1, 2, 3 ];

const arr2 = arr1;

console.log(arr1); // [1, 2, 3 ]
console.log(arr2); // [1, 2, 3 ]

arr1.push(4); // it changes the origonal array

const arr3 = arr1.concat(arr2);// concat doesnt change the origonal array

console.log(arr1); // [ 1, 2, 3, 4 ]
console.log(arr2);// [ 1, 2, 3, 4 ]
console.log(arr3);// [ 1, 2, 3, 4 , 1, 2, 3, 4 ]


// primitives
let str1 = 'john';
let str2 = str1;

console.log(str1); // john 
console.log(str2); // john

str1 = 'james';
// str2 = str1; // we get james for str2 if we did this 
console.log(str1); // james
console.log(str2); // john


// copying your array without prevent mutability by using spread operator
const numbers1 = [ 1, 2, 3, 4, 5 ];
const numbers2 = [...numbers1];

console.log(numbers1); // [ 1, 2, 3, 4, 5 ]
console.log(numbers2); // [ 1, 2, 3, 4, 5 ]

numbers1.push(6);

console.log(numbers1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers2); // [ 1, 2, 3, 4, 5 ]


// copying your array without prevent mutability by using loops
const bolleans1 = [ true, false, true ];
const bolleans2 = [];

bolleans1.forEach((el) => {
    bolleans2.push(el);
});

console.log(bolleans1); // [ true, false, true ]
console.log(bolleans2); // [ true, false, true ]

bolleans1.push('Hello');

console.log(bolleans1); //[ true, false, true, 'Hello' ]
console.log(bolleans2); //[ true, false, true ]

// seperated operators or loops does not work in case of nested arrays or objects 
const groups1 = [
    'John',
    ['Alex', 'Mariia'],
    ['Jhon', 'Jane']
];

const groups2 = [ ...groups1 ];

console.log(groups1); // [ 'John', [ 'Alex', 'Mariia' ], [ 'Jhon', 'Jane' ] ]
console.log(groups2); // [ 'John', [ 'Alex', 'Mariia' ], [ 'Jhon', 'Jane' ] ]

groups1.push('Mark');
groups1[1][1] = 'Jessieca';

console.log(groups1); // [ 'John', [ 'Alex', 'Jessieca' ], [ 'Jhon', 'Jane' ], 'Mark' ]
console.log(groups2); // [ 'John', [ 'Alex', 'Jessieca' ], [ 'Jhon', 'Jane' ] ]

// we call this copying with loops or spread operator as SHALLOW COPY
// DEEP COPY: safer way tp prevent  mutability and can be achived using JASON

