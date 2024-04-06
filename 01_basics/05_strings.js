const name ='vivek';
const repoCount =50;

// console.log(name+ repoCount +"value")  old ways

console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)

const gameName =new String(       '            vivei-hv      ')

console.log(gameName.__proto__);

console.log(gameName.indexOf('e'));
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

const newString= gameName.substring(7,4)
console.log(newString);


const newanotherString= gameName.slice(-8,1)
console.log(newanotherString)

console.log(gameName.trim())