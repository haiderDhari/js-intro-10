function checkAge(age) {
    if(age < 13) console.log('YOU CAN NOT CREATE AN ACCOUNT');
    else console.log('FILL YOUR PAYMENT DETAILS');
}

checkAge(10);

try {
    checkAge(16);
}
catch(error) {
    console.log(error.message);
}

console.log('HAVE A GOOD DAY');

