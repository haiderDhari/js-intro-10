console.log(!true || 2 <= 2 || false);//t
console.log(!(3 > 1 && !true) && 5!='5');//f

console.log((5 * 5) < !(1 + 100)); //f

console.log('hello' && true); // t
console.log(5 && true); // t
console.log(0 && true); // zero (falsy)
console.log(0 && 1==1); // zero (falsy)
console.log(false || 0); // zero
console.log(false || 'hello'); 

console.log(!(true));
