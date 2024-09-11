// Prototype
/*

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity; 
}

Product.prototype.sell = function (quantity) {
  if(quantity > this.quantity) throw new Error('Stock is not available!');
  this.quantity -= quantity;
};

Product.prototype.return = function (quantity) {
  this.quantity += quantity;
};

Product.prototype.getInventory = function () {
  console.log(`We have ${this.quantity} of ${this.name}.`);
};

Product.prototype.getPrice = function () {
  return this.price;
};

Product.prototype.discount = function (percentage) { // 10 
  this.price -= this.price * (percentage / 100);
}
*/

class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity; 
    }
  
    sell(quantity) {
      if(quantity > this.quantity) throw new Error('Stock is not available!');
      this.quantity -= quantity;
    }
    
    return(quantity) {
      this.quantity += quantity;
    }
    
    getInventory() {
      console.log(`We have ${this.quantity} of ${this.name}.`);
    }
    
    getPrice() {
      return this.price;
    }
    
    discount(percentage) { // 10 
      this.price -= this.price * (percentage / 100);
    }
  }
  
  
  const phone = new Product('iPhone 16', 1000, 20);
  
  phone.getInventory();
  console.log(phone.getPrice());
  phone.discount(20);
  console.log(phone.getPrice());
  
  phone.sell(5);
  phone.getInventory();
  
  phone.return(2);
  phone.getInventory();


  //// 
  class Engineer {
    constructor(fname, lname, age) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
    }
  
    work() {
      console.log('WORK');
    }
  
    solveProblem() {
      console.log('SOLVE PROBLEM');
    }
  }
  
  class Tester extends Engineer {
    constructor(fname, lname, age, companyName) {
      super(fname, lname, age); // inheriting parent constructor
      this.companyName = companyName;
    }
  
    test() {
      console.log('TEST');
    }
  }
  
  const tester1 = new Tester('John', 'Doe', 25, 'Microsoft');
  
  console.log(tester1);
  tester1.work();
  tester1.solveProblem();
  tester1.test();
  
  class SDET extends Tester {
    constructor(fname, lname, age, companyName, pLanguage) {
      super(fname, lname, age, companyName);
      this.pLanguage = pLanguage;
    }
  
    code() {
      console.log(`Codes in ${this.pLanguage}!`);
    }
  }
  
  const sdet1 = new SDET('Alex', 'Smith', 30, 'Apple', 'TypeScript');
  console.log(sdet1);
  sdet1.work();
  sdet1.solveProblem();
  sdet1.test();
  sdet1.code();
  
  
  
  
  
  
  
  