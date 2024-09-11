const person = {
    eat: function () {
        console.log('eat');
    },
    sleep: function () {
        console.log('sleep');
    },
    walk: function () {
        console.log('walk');
    }
};


const singer = {
    sing: function() {
        console.log('sing');
    },
    playguitar: function () {
        console.log('playguitar');
    },
    __proto__: person
};

singer.walk();
singer.eat();
singer.sleep();
singer.sing();
singer.playguitar();

console.log(singer.__proto__);