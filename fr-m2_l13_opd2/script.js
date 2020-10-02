const age = 19;
const isFemale = true;
const driverStatus = 'bob';
const name = 'John';
const totalAmount = 15;

if (age >= 18) {
    console.log('you may enter');
} else {
    console.log('you may NOT enter');
}

if (isFemale) {
    console.log('je krijgt korting op ladies Night');
} else {
    console.log('je krijgt GEEN korting op ladies Night');
}

if (driverStatus === 'bob') {
    console.log('here are your car keys');
} else {
    console.log('let me order an uber for you');
}

if (age >= 18 && age <= 25) {
    console.log('You get 50% discount!')
} else {
    console.log('sorry, no discount for you')
}

if (name === 'Sarah' || name === 'Bram') {
    console.log('enjoy a free beer!');
} else {
    console.log('that is € 2.75 please');
}

if (totalAmount > 25 && totalAmount <= 50) {
    console.log('free vegetarian bitter balls for you')
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log('free nachos for you')
} else if (totalAmount >= 100) {
    console.log('a free bottle of champagne for you')
} else {
    console.log('drink more, eat free')
}
