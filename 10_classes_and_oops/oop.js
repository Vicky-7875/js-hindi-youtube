const user = {
    username: 'vivek',
    loginCount: 9,
    signedIN: true,
    getUserDetails: function () {
        console.log(
            // 'got user details :- '+this.username
            this
        );
        // return true;
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());



function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.freetign = function (){
        console.log(`${this.username}`)
    }
    return this;
}

const userOne = new User("vivek", 44, true)
const userTwo = new User("assasa3323", 4334, false)

console.log(userTwo.constructor)
