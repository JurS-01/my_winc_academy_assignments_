//A zet functie om naar een arrow functie
const ikRockArrowFunctions = () =>
    console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions()

//B zet functie om naar een arrow functie op 1 regel
const fivePlusSeven = () => 5 + 7;
console.log(fivePlusSeven());

//C zo kort mogelijke anonieme arrow function, met  1 + 2 
() => 1 + 2;

//D arrow function die de params a en b bij-elkaar optelt.
const myFunction = (a, b) => a + b;
console.log(myFunction(3, 4));

//E  arrow function met 1 parameter(c), returned altijd c plus 5
const addFive = c => c + 5;
console.log(addFive(5));

//F arrow function die een simpel object returned
const createObject = () => ({
    greeting: "hoi"
});
console.log(createObject());