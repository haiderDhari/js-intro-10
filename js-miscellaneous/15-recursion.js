/* function printhello() {
    console.log('hello');
    printhello();
}

printhello();
*/

function sum(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(5));
console.log(sum(3));



function sumRecursive(num) {
    if(num === 0) return 0;
    return num + sumRecursive(num - 1);
}

console.log(sumRecursive(3));
console.log(sumRecursive(6));