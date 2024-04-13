//ES6

// class User {
//     constructor(username, email, pass) {
//         this.username = username;
//         this.email = email;
//         this.pass = pass;
//     }

//     encryptPass() {
//         return `${this.pass}abv`;
//     }
//     upperCaseName() {
//         return `${this.username.toUpperCase()}`;

//     }
// }
// const chai = new User('chice', 'chai@gmial.com', 123);




//behind the scence

function User(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
}

User.prototype.encryptPass=function(){
    return `${this.pass}sadasdsadsad`;
}
User.prototype.upperCaseName=function(){
    return `${this.username.toUpperCase()}`;
}

const chai = new User('chice', 'chai@gmial.com', 123);
console.log(chai.encryptPass());
console.log(chai.upperCaseName());