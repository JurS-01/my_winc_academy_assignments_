/* Opdracht : Rest and spread Operator
- Je gaat 2 functies schrijven

Functie 1:
- Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
- De functie accepteert meerdere argumenten
- Gebruik de rest operator om ervoor te zorgen dat je functie alle argumenten 
als een array behandelt.
*/

const sumRest = (...numbs) => {
    return numbs.reduce((previous, current) => {
        return previous + current;
    })
}

console.log(sumRest(1, 2, 3, 4, 5));

/*
Functie 2:
- Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
- De functie accepteert 1 argument, namelijk een array van cijfers
- Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de
array bij elkaar optelt.
*/

const sumSpread = (a, b, c) => {
    return a + b + c;
}

let numbArray = [8, 11, 3];
console.log(sumSpread(...numbArray));