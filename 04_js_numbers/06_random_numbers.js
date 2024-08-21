let random = Math.random();
console.log(random);
// get random number between zero and 10 we wont get 10
let random = Math.random() * 10;
console.log(random);

console.log(Math.floor(random));
console.log(Math.ceil(random));
console.log(Math.round(random));
console.log(Math.trunc(random));


let random = Math.random() * 10;

console.log(Math.round(random));

// get a random number between 0 ans 25 both included

let ranNum0_25 = Math.random() * 25;
console.log(Math.round(ranNum0_25));

// get a random number between 0 ans 25 zero included
let ranNum0_25 = Math.random() * 25;
console.log(Math.floor(ranNum0_25));

// get a random number between 0 ans 25 25 included
let ranNum0_25 = Math.random() * 25;
console.log(Math.ceil(ranNum0_25));

// between 13 to  27
let ranNum13_27 = Math.floor(Math.random() * 15) + 13;
console.log(ranNum13_27);

// 943 and 1005

// max - min + 1
// 1005 - 943 + 1= 63

// random number bewteen 14 and 19 , 14 included

let ranNum14_19 = Math.floor(Math.random(18_14+1)) + 14;
console.log(ranNum14_19);

console.log(Math.floor(Math.random() * 5 ) + 14);
