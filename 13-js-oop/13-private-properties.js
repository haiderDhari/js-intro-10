class Engineer {
    // haveDegree = true; // piblic property
    haveDegree = true; // private property
    constructor (fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

const e1 = new Engineer('Jhon', 'Doe');
const e2 = new Engineer('Alex', 'Smith');

console.log(e1);
console.log(e2);

// public access
console.log(e1.haveDegree);
console.log(e2.haveDegree);


class Engineer1 {
    #haveDegree = true; // private property
    
    constructor (fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    gethaveDegree() {
        return this.#haveDegree;
    }
    sethaveDegree(bool) {
        this.#haveDegree = bool;
    }
}

const e11 = new Engineer1('Jhony', 'Doe');
const e22 = new Engineer1('Alexy', 'Smith');

console.log(e11);
console.log(e22);

// public access
e11.#haveDegree();
console.log(e22.#haveDegree);