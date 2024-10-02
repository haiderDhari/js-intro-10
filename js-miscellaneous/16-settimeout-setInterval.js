// console.log('Hello World');
/*
setTimeout(() => {
    console.log('Hello World');
    setInterval(() => {
        console.log('TechGlobal Batch10');
    }, 2000);    
}, 5000);
*/

const Interval = setInterval(() => {
    console.log('TechGlobal Batch10');
}, 2000);

setTimeout(() => {
    clearInterval(Interval);
}, 10500)
