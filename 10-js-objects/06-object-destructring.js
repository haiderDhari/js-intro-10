// array destructuring 

const arr = ['abc', 'xyz', 'hi', 'Hello'];

// let first = arr[0];
// let second = arr[1];
// let third = arr[2];
// let fourth = arr[3];

// or in one line 
const [First, second, third, fourth] = arr;

console.log(fourth.toUpperCase());
console.log(First);

// object destructuring 

const account = {
    username: 'techGloabalSchool',
    email: 'techGloabalSchool@gmail.com',
    password: 'test1234'
};

const { username, email, password} = account;

console.log(username);
console.log(email);
console.log(password);

