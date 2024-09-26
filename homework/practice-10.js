class Customer {
    constructor(name, age, membershipType, membershipCost){
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }

    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with ${this.membershipCost}`;
    }

    upgradeMembership() {
       this.membershipType = 'Premium';
       this.membershipCost *= 1.2;
    }
}



class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost) {
        super(name, age, membershipType, membershipCost);
    }
    applyDiscount() {
        this.membershipCost *= 0.9;
    }
}


/*
Create a class called BusinessCustomer and inherit the Customer class
Create a constructor for this class which takes 5 arguments:
    name
    age
    membershipType
    membershipCost
    duration
    - Inherit the Customer class constructor and the other methods
- Create a method called extendContract() which extends the business customer's contract by 1 year 
and decreases the cost by %15.
*/
class BusinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost);
        this.duration = duration;
    }
    extendContract() {
        this.duration += 1;
        this.membershipCost *= 0.85;
    }


}

const customer1 = new Customer('John Doe', 30, 'Basic', 50);

/*
Create a VIP customer object with below information
vipCustomer = { name: 'Jane Smith', age: 35, membershipType: 'Gold', membershipCost: 100 }
*/
const vipCustomer = new VIPCustomer('Jane Smith', 35,  'Gold', 100 );


/*
Create a business customer object with below information
businessCustomer = { name: 'David Johnson', age: 40, membershipType: 'Platinum', membershipCost:
200, duration: 2 }
*/
const businessCustomer = new BusinessCustomer( 'David Johnson',  40, 'Platinum', 200, 2);



/*
Execute the upgradeMembership() method for customer1
    -this will upgrade the membership type of customer1 to 'Premium'
Execute the applyDiscount() method for vipCustomer
*/

customer1.upgradeMembership();
vipCustomer.applyDiscount();for(const customer of [customer1, vipCustomer, businessCustomer]) console.log(customer.getDetails());
businessCustomer.extendContract();


// console.log(vipCustomer.getDetails());
// console.log(businessCustomer.getDetails());
// console.log(customer1.getDetails());
for(const customer of [customer1, vipCustomer, businessCustomer]) console.log(customer.getDetails());