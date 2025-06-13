const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'johndoe@gmail.com',
    phone: '000-000-0000'
};

console.log(user);
user. firstName = 'haider';
console.log(user);
console.log(user. phone);
console.log(user ['phone']);
user.password = 'test1234'; 

console.log(user);
delete user. age;
delete user['lastName'];
console.log(user);

const user1 = {
    fname: 'haider',
    lname: 'dhari'
}
console.log(user1);
user1.  lname = 'alluhabi';
console.log(user1);
