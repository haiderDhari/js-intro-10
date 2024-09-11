const engineer = {
    solveproblem: function () {
        console.log('solveproblem');
    }
};





const tester = {
    test: function () {
        console.log('test');
    },
    __proto__: engineer
};

const sedt = {
    code: function () {
        console.log('test');
    },
    __proto__: tester
};

sedt.code();
sedt.test();
sedt.solveproblem();

console.log(sdet__proto__);
