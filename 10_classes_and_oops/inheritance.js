class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Usernaem is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, pass) {
        super(username)
        this.email = email;
        this.pass = pass;
    }

    addCouser() {
        console.log(`A new couser was added by ${this.username}`);
    }
}

const chai = new Teacher('Vivek', 'emcial.com', '123')

chai.logMe();
chai.addCouser();

const maslachai= new User('amaslsal')

maslachai.logMe()

// console.log(chai==maslachai)

console.log(chai instanceof User) //true
console.log(chai instanceof Teacher) //true