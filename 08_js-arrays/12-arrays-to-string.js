const names = [ 'Alex', 'James', 'Jane' ];

let namesString1 = names.toString();

console.log(names);
console.log(namesString1);

console.log(names.length);
console.log(namesString1.length);


let namesString2 = names.join();

console.log(namesString2); //Alex,James,Jane

let namesString3 = names.join(' ');
let namesString4 = names.join(' - ');
console.log(namesString3); //Alex James Jane
console.log(namesString4); //Alex - James - Jane
