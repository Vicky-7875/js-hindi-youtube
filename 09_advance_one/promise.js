// fetch('htt


//create promiss
const promiseONe = new Promise(function (resolve, reject) {
    //DO an async task
    //DB calls, cryptography,network
    setTimeout(() => {
        console.log('async task is complete');
        resolve()
    }, 1000);
})

//consume promise
promiseONe.then(function () {
    console.log('promise consumed');
})

//other way write promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async task 2');
        resolve();
    }, 1000);
}).then(function () {
    console.log('async 2 resolved')
})


//promise 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: 'vuvek', email: 'v@gmial.com' })
    }, 1000);
})

promiseThree
    .then(function (user) {
        console.log(user)
    })

const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            res({ username: 'vivek', pass: '123' })
        } else {
            rej('ERROR:something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    })
    .catch(function (err) {
        console.log(err);
    }).finally(function () {
        console.log("the promise is either resolved or rejected");
    })


const promiseFIve = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'javascript', pass: '123' })
        } else {
            reject('ERROR:js went wrong')
        }
    }, 1000)
});

async function consumePromiseFIve() {
    try {
        const response = await promiseFIve;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFIve()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://randomuser.me/api/?page=3&results=100');
//         const result = await response.json()
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getAllUser()


fetch('https://randomuser.me/api/?page=3&results=100')
    .then((res) => {
        return res.json()
    })
    .then((data) => { console.log(data); })
    .catch(err => console.log(err)
    )