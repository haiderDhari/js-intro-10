// synchronous code
console.log('1');
console.log('2');
console.log('3');



setTimeout(() => {
    console.log('A');
}, 5000)// seconds 5 , 10 seconds 10000


setTimeout(() => {
    console.log('B');
}, 1000);

setTimeout(() => {
    console.log('C');
}, 1500);


setTimeout(() => {
    console.log('VISIT URL');
}, 1000);

setTimeout(() => {
    console.log('ENTER USERNAME');
    console.log('ENTER PASSWORD');
    console.log('CLICK LOGIN');
}, 500)

setTimeout(() => {
    console.log('VALIDATE');
}, 250);


// Synchronous code
console.log('1');
console.log('2');
console.log('3');

setTimeout(() => {
  console.log('A');
}, 2000);

setTimeout(() => {
  console.log('B');
}, 1000);

setTimeout(() => {
  console.log('C');
}, 1500);

// OUTPUT: 
/*
What we expect
A
B
C
and takes 4.5 seconds
*/

/*
What actually happens
B
C
A
2 seconds
*/