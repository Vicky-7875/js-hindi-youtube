const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby"
}

for (const key in myObj) {
    // console.log(`${key} for ${myObj[key]}`);
}


const myR=['js','eb','dsdsdds']
for (const key in myR) {
    // console.log(myR[key]);
}



const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')
map.set('AM', 'America')
map.set('IT', 'ITELy')

for (const key in map) {
    console.log(key);
}

