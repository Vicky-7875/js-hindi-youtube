function setUserName(username) {
    //complex DB calls
    this.username = username;
    console.log(username)
    console.log('called')
}

function createUser(username, email, pass) {
    setUserName.call(this,username)
    this.email = email;
    this.pass = pass;
}

 const chai = new createUser('vivek','chai@fb.com','123')

 console.log(chai);