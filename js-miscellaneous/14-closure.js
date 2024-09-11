let initialScore = 0;

function score() {
    return initialScore += 1;
}

initialScore = 100;


score();
score();
score();


console.log(initialScore);

function score1() {
    let initialScore = 0;
    return initialScore += 1;
}

initialScore = 100;
score1();

console.log(initialScore);
