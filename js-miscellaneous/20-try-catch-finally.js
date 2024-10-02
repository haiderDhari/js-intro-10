try {
    console.log('THIS IS TRY BLOCK')

    console.log('Hello');
}
catch(error) {
    console.log('THIS IS CATCH BLOCK')

    console.log(error);
}



//
try {
    console.log('THIS IS TRY BLOCK')

    console.log(number);
    const pi = 3.14;
    pi = 5;
}
catch(error) {
    console.log('THIS IS CATCH BLOCK')
    console.log(error);
}



//
try {
    console.log('THIS IS TRY BLOCK')

    console.log(number);
    const pi = 3.14;
    pi = 5;
}
catch(error) {
    console.log('THIS IS CATCH BLOCK')
    console.log(error.message);
}
finally {
    console.log('THIS IS FINAL BLOCK')

}


//
try {
    console.log('THIS IS TRY BLOCK')
}

catch(error) {
    console.log('THIS IS CATCH BLOCK')

}

finally {
    console.log('THIS IS FINALLY BLOCK')

}

//

try {
    throw new Error('LATER!!!');
    console.log('DO A TRANSACTION!');
}
catch(error) {
    console.log('TRY AGAIN LATER!');
}
finally {
    console.log('NAVIGATE CUSTOMER TO THIER DASHBOARD');
}

