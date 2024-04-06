function sayMyName() {
  console.log("V");
  console.log("I");
  console.log("V");
  console.log("E");
  console.log("K");
}

// sayMyName()

// function addTwoNum(a, b) {
//   console.log(a + b);
// }

function addTwoNum(a, b) {
  return a + b;
}

const result = addTwoNum(3, null);
// console.log(result)

function loginUser(username = "user") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUser('vivek'))
// console.log(loginUser());

//rest operator
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(2,3,3,4,32434))

const user = {
  sname: "vive",
  price: 100,
};

function handleObj(anyObj) {
  console.log(`username is ${anyObj.name}`);
}

// handleObj(user)
handleObj({
  name: "vissddi",
  price: 20132,
});

const newarr = [1, 2, 34, 4, 5];
function handleArr(getarray) {
  return getarray[2];
}

console.log(handleArr(newarr));
