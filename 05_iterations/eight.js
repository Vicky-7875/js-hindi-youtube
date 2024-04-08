const myNums = [1, 2, 3, 4, 5];

const initialValue = 0;
const sumWithInitial = myNums.reduce((accumulator, currentValue) => accumulator + currentValue,
    initialValue);

console.log(sumWithInitial);