class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`User name is ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const vievk = new User('vivek')
// console.log(vievk.createId())


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", 'iphone@mga.com')
iphone.logMe()
// console.log(iphone.createId()) //not accesss
