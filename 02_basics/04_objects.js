// const tinderuser= new Object();   //singleton object
const tinderuser = {}; //non-singleton object

tinderuser.id = "1234";
tinderuser.name = "smaaa";
tinderuser.isloggien = false;
// console.log(tinderuser);

const regularUser = {
  email: "viveks@gmialcon",
  userFullname: {
    firstname: "vivek",
    lastname: "t",
  },
};

// console.log(regularUser.userFullname.age?.userFullnam.sas.asdsads.sadasdsa);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = { obj1, obj2 };
// const obj3= Object.assign(obj1,obj2)
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('id'));

const couser = {
  courename: "js hindi",
  price: 777,
  couserInst: "viekve",
};

// couser.couserInst
// const { couserInst } = couser;
const { couserInst:instru } = couser;
console.log(instru);


