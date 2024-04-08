const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(greet)
}

//Maps

const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')
map.set('AM', 'America')
map.set('IT', 'ITELy')


// console.log(map)

for (const [key,value] of map) {
    console.log(key, ':', value);
}

//object
const myobj ={
    'game1':'NFS',
    'game2':'sdda'
}

// for(const [key,value] of myobj){
//     console.log(key, ':', value);
// }