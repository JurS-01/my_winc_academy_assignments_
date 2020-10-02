
let checkedNumber = 0;

while (checkedNumber < 20) {
    checkedNumber++;
    if (checkedNumber % 2 == 0) {
        console.log(`${checkedNumber} is even`);
    } else {
        console.log(`${checkedNumber} is odd`);
    }
}

console.log('We\'ve reached 20');
