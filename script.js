console.log('proses 1');
setTimeout(function () {
    console.log('proses 2');
}, 5000);
console.log('proses 3');

// Callback

const insertName = (callback1, callback2) => {
    const name = 'Alpha';

    callback1(name);
    callback2(name);
};

function showName(name) {
    console.log(`My name is ${name}`);
}

function greeting(name) {
    console.log(`Hallo ${name}`);
}

insertName(showName, greeting);

// Promise

let stillAlive = false;

// create promise
const myPromise = new Promise((resolve, reject) => {
    if (stillAlive) {
        resolve('Aku mencintaimu');
    } else {
        reject('Aku tidak bisa mencintaimu lagi');
    }
});

console.log(myPromise); // output: Promise <resolve/ reject>

// consume with promise
myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.log(error))
    .finally(() => {
        console.log('apapun yang terjadi, aku pernah mencintaimu');
    });

// consume with async await

let result = async function () {
    try {
        let res = await myPromise;
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('apapun yang terjadi, aku pernah mencintaimu');
    }
};

result();
