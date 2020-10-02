
// Deel A

/*
makeSandwich 
    Take a slice of bread
    Add cheese
    Put another slice of bread on it
    
makeSandwich()
*/

let makeCheeseSandwich = () => {
    return `- take a slice of bread 
- add cheese
- put another slice of bread on it`;
}

console.log(makeCheeseSandwich());


// Deel B

let makeSandwich = (topping) => {
    return `- take a slice of bread   
- add ${topping}
- put another slice of bread on it
- there you go a sandwich with ${topping}`; // function declared / expressed
}

console.log(makeSandwich('cheese'));  // function called
console.log(makeSandwich('goat cheese'));


// Deel C

let calculateDiscountedPrice = (totalAmount, discount) => {
    return `The final price is €${Math.round(totalAmount - discount)}`;
}

console.log(calculateDiscountedPrice(56.18, 10.25));


// Deel D

let calculateFinalPrice = (totalAmount, discount) => {
    if (totalAmount < 25) {
        return `The final price is ${Math.round(totalAmount)}`
    } else {
        return `The final price is €${Math.round(totalAmount - discount)}`;
    }
}

console.log(calculateFinalPrice(24.34, 10.10));