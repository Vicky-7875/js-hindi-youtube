function multiplyBY5(num) {
    return num * 5;
}

multiplyBY5.power = 2
// console.log(multiplyBY5(5))
// console.log(multiplyBY5.power)
// console.log(multiplyBY5.prototype)



function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    console.log( this.score++);
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`scroe is ${this.score}`)
}
const chai = new createUser('chide', 25)
const tea = new createUser('tea', 250)

chai.printMe()
tea.printMe()

chai.increment();
tea.increment();