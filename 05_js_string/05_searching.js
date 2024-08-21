// startsWith() vs ednsWith() vs includes()\

// startsWith non_static
let str ='techGloabale';
console.log(str.startsWith('hi'));
console.log(str.startsWith('Tech'));
console.log(str.startsWith('T'));
console.log(str.startsWith('t'));
console.log(str.toLowerCase().startsWith('tech'));
console.log(str.startsWith(''));
console.log(str.startsWith(' '));

// endsWith non_static
console.log(str.endsWith('e'))
console.log(str.endsWith('ale'))
console.log(str.endsWith('Gloabale'))
console.log(str.endsWith(''))
console.log(str.endsWith('E'))

// includes non_static
let str = 'eeeee rrrrr ttttt'
console.log(str.includes(' '));
console.log(str.includes('e'))
console.log(str.includes('ale'))
console.log(str.includes('Gloabale'))
console.log(str.includes('Glbe'))
console.log(str.includes('G') && str.includes('l'));
console.log(str.includes(''));
console.log(str.includes('E'))


// indexOf() vs lastindexOf() non_static
// charAt(number) vs indexOf(letter)
let message = 'Can I can a can?';
console.log(message.charAt(4));
console.log(message.indexOf('I'));
console.log(message.indexOf('?'));
console.log(message.charAt(14));
console.log(message.indexOf('can'));
console.log(message.indexOf('Can'));
console.log(message.indexOf('A'));
console.log(message.lastIndexOf('can'));
console.log(message.lastIndexOf('Can'));
console.log(message.lastIndexOf(''));
console.log(message.lastIndexOf(' '));
console.log(message.indexOf(' '));
console.log(message.startsWith('C'));
