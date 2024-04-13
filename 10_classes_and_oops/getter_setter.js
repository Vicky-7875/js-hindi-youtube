class User {
    constructor(username, pass) {
        this.username = username;
        this.pass = pass
    }

    get pass() {
        return this._pass + 'vivekvesdsadmsklm21k3l2m'
        // return this._pass.toUpperCase()
    }
    set pass(value) {
        this._pass = value
    }
    get username() {
        return this._username.toUpperCase();
    }
    set username(val) {
        this._username = val
    }

}
const vivek = new User('vivek@mskamdlksma', 'Axzcxcxzc')

console.log((vivek.pass));
console.log((vivek.username));