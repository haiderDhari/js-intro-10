// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50

for(let i = 0; i <= 50; i++) { // for 
   if(i % 2 === 0) console.log(i);
}

let i = 0;

while (i <= 50) { // while
    if (i % 2 === 0) {
        console.log(i);
    }
  
    i++;
}
 // or
 let i = 0;
  while(i <= 50) {
    console.log(i);
    i += 2;
  }



// find the sum of the numbers starting from 3 to 7 = 25;

let sum = 0;

for(let i = 3; i <= 7; i++) {
    sum += i;
}

console.log(sum);


// while
let j = 3;
let sum1 = 0;

while(j <= 7) {
    sum += 1;
    console.log(sum);
}