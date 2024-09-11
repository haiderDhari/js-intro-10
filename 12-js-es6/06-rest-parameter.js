function sum(...values) { // rest parameters [ 3, 5, 10, 2, 5, 7, 12 ]
    let result = 0;
  
    for(const number of values) {
      result += number;
    }
  
    return result;
  }
  
  console.log(sum()); // 0
  console.log(sum(3)); // 3
  console.log(sum(3, 5)); // 8
  console.log(sum(3, 5, 10)); // 18
  console.log(sum(3, 5, 10, 2, 5, 7, 12)); // 44
  
  
  /*
  Write a function that takes any number of arguments and return their product
  
  product()               -> 0
  product(5)              -> 5
  product(2, 5)           -> 10
  product(2, 5, 3)        -> 30
  product(2, 5, 3, 4)     -> 120
  */


function product(...values) { 
    let result = 1;
  
    for(const number of values) {
      result *= number;
    }
  
    return result;
  }

console.log(product(1, 4));
console.log(product(4, 4));
console.log(product(5, 4));