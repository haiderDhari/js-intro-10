// break vs continue

// print all the numbers between 1 and 20 except 6, 13
for(let i = 1; i <= 20; i++) {
    if(i !== 6 && i !== 13) console.log(i); 
}

// or 
for(let i = 1; i <= 20; i++) {
    if(i === 6 || i === 13) continue;
        console.log(i); 
}
 // now the same example but print all the numbers except 6, 13 and,
 // any number more than 15

for(let i = 1; i <= 20; i++) {
    if(i === 6 || i === 13) continue;
else if(i >= 16) continue;
        console.log(i); 
}

// or
for(let i = 1; i <= 20; i++) {
    if(i === 6 || i === 13) continue;
    if(i === 16) break;
        console.log(i); 
}

