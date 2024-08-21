let num = 10;

console.log(num);
console.log(num.toString());
console.log(typeof num);
console.log(typeof num.toString());
console.log(typeof num.toString);

let num = 10;

console.log(num + 5);
console.log(num.toString() + 5);
console.log(typeof num + 5);
console.log(typeof num.toString() + 5);


console.log(123.23.toFixed(3));
console.log((123.23).toPrecision(3));
console.log((10.957).toFixed(2));
console.log((10.951).toPrecision(2));

// coverting other data types to numbers
let n1 = 5;
let n2 = 3;

console.log(n1 + n2);
console.log(Number(n1) + Number(n2));

console.log(parseInt(n1) + parseInt(n2));
console.log(parseFloat(n1) + parseFloat(n2));

let n1 = 5;
let n2 = 'abc';

console.log(n1 + n2);
console.log(Number(n1) + Number(n2));

console.log(parseInt(n1) + parseInt(n2));
console.log(parseFloat(n1) + parseFloat(n2));

let n1 = '5.1';
let n2 = '5.2';
console.log(Number(n1) + Number(n2));
console.log(parseInt(n1) + parseInt(n2));
console.log(parseFloat(n1) + parseFloat(n2));

console.log(isFinite(5));

console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));


console.log(Number.isInteger(6));
console.log(Number.isInteger(6.1));
console.log(Number.isInteger(9999999999999999999999999));
console.log(Number.isSafeInteger( 999999999999999999999999999999999n));

