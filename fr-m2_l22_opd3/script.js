/* Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that
tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const Num = 9;

const testNum = new Promise((resolve, reject) => {
    if (Num > 10) {
        resolve(`${Num} is greater than 10`);
    } else {
        reject(`${Num} is not greater than 10`);
    }
})

const isItGreater = () => {
    testNum.then((resolved) => {
        console.log(resolved);
    }).catch((rejected) => {
        console.log(rejected);
    })
}
isItGreater();


/* Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(),
will take in an array of words and capitalize them, and then the second function, sortWords(),
will sort the words in alphabetical order. If the array contains anything but strings, it
should throw an error.
Then call these functions by *chaining* the promises
// call both functions, chain them together and log the result to the console
*/


const makeAllCaps = (wordsArray) => {
    return new Promise((resolve, reject) => {
        if (wordsArray.every(word => {
                return typeof word === 'string';
            })) {
            resolve(sortWords(wordsArray.map(word => {
                return word.toUpperCase();
            })))
        } else {
            reject('Not a string!')
        }
    })
};

const sortWords = (wordsArray) => {
    return new Promise((resolve, reject) => {
        if (wordsArray) {
            resolve(wordsArray.sort());
        } else {
            reject('strings only')
        }
    })
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(complicatedArray)
    .then(sortWords(complicatedArray))
    .then(result => console.log(result))
    .catch(error => console.log(error))