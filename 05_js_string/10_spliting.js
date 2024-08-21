let items = 'apples, oranges, bananas, eggs, milk';
console.log(items.split(','));
console.log(items.split(' '));
console.log(items.split(', '));// accurate 
console.log(items.split(' ,'));
console.log(items.split('oranges'));

let sent = 'I like javascript';

//Ex:
10 | 20 | 30 | 40 
/* assume u r giving a string having some words
count how many words this string has
'i like javascript' = 3
'me and you will be successful' = 6
*/
let str='i like javascript';
console.log(str.split(' '));// space
console.log(str.split(','));// space
console.log(str.split(''));// empity string
console.log(str.split(' ').length);// words length




