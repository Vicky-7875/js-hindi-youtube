let myName = 'vviek                        ';
// console.log(myName.length)
// console.log(myName.truelength)

let myHero = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getIronPower: function () {
        console.log(`spiderman  power is ${this.spiderman} `);
    }
}

Object.prototype.vivek = function () {
    console.log(`vivek is present in all objects`);
}

Array.prototype.heyVivek = function () {
    console.log('vivek say Hello');
}
// heroPower.vivek()
// heroPower.heyVivek() //not sharing function

// myHero.vivek()
// myHero.heyVivek()


//prototypal inheritance  old style
const User = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'js agreemnt',
    fullTimeSupport: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User


//prototypal inheritance  morden syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


//add string custom property truelength


let anotherUserName ='chia aur code          '
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}
anotherUserName.trueLength();
myName.trueLength();

"vivek                               ".trueLength()
"iceTEad".trueLength()