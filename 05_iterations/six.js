const myarr = ['js', 'python', 'sdfdf', 'dsfds']


const values = myarr.forEach((item) => {
    // console.log(item)
})

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNew = myNums.filter((num) => {
//      return num> 4
// })

const myNew = [];
myNums.forEach((num) => {
    if (num > 5)
        myNew.push(num)
})
// console.log(myNew)

const mybookArr =
    [
        {
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "images/things-fall-apart.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Things Fall Apart",
            "year": 1958
        },
        {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "images/fairy-tales.jpg",
            "language": "Danish",
            "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            "pages": 784,
            "title": "Fairy tales",
            "year": 1836
        },
        {
            "author": "Dante Alighieri",
            "country": "Italy",
            "imageLink": "images/the-divine-comedy.jpg",
            "language": "Italian",
            "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
            "pages": 928,
            "title": "The Divine Comedy",
            "year": 1315
        },
        {
            "author": "Unknown",
            "country": "Sumer and Akkadian Empire",
            "imageLink": "images/the-epic-of-gilgamesh.jpg",
            "language": "Akkadian",
            "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
            "pages": 160,
            "title": "The Epic Of Gilgamesh",
            "year": -1700
        },
        {
            "author": "Unknown",
            "country": "Achaemenid Empire",
            "imageLink": "images/the-book-of-job.jpg",
            "language": "Hebrew",
            "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
            "pages": 176,
            "title": "The Book Of Job",
            "year": -600
        },
        {
            "author": "Unknown",
            "country": "India/Iran/Iraq/Egypt/Tajikistan",
            "imageLink": "images/one-thousand-and-one-nights.jpg",
            "language": "Arabic",
            "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
            "pages": 288,
            "title": "One Thousand and One Nights",
            "year": 1200
        }]

// const userBooks = mybookArr.filter((bk) => bk.author === "Unknown")
userBooks = mybookArr.filter((bk) => bk.year >=! 1000 && bk.pages === 288)
console.log(userBooks)