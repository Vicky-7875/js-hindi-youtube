const user = {
    username: "vivek",
    price: 999,
    welcomemess: function () {
        console.log(`${this.username} welcome to website`);
    }
}

user.username = 'sam'
// user.welcomemess()

// console.log(this)
// function chai() {
//     let username ='vivek'
//     console.log(this.username)
// }

// chai()

// const chai =function (){
//     let username='vivel'
//     console.log(this.username)
// // }
// const chai = () => {
//     let username = 'vivel'
//     console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ usernaem: 'vivek' })

// console.log(addTwo(1, 2))

const myArr = [12,2,34,3,4,3,3]

