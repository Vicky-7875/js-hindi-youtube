//singleton:- using construtor singleton
// Object.create()

//object literals

const mySym = Symbol("key1");
const mySym1 = Symbol("key2");
const jsUser = {
  "full name": "vivek T",
  mySym1: "mykey2",
  [mySym]: "mykey1",
  name: "vivek",
  age: 29,
  location: "nagpur",
  email: "vivektondare@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "satureday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["mySym1"]);
// console.log(typeof jsUser["mySym1"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser);
jsUser.email = "vivekss@ggg.com";
// console.log(jsUser);

jsUser.gretting = function () {
  console.log("hello js user");
};
jsUser.gretting1 = function () {
  console.log("hello js user ",this.name);
};


// console.log(jsUser.gretting())
// console.log(jsUser.gretting)

console.log(jsUser.gretting1());