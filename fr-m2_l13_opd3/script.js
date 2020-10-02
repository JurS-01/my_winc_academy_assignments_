// Deel 1 - Objects

let person = {
    name: 'Jurian',
    age: 38,
    evaluations: [7, 10, 9],
};

console.log(person);

console.log(person.name);
console.log(person.age);

console.log(person['name']);
console.log(person['age']);

console.log(person.evaluations);

// Deel 2 - Arrays

let heroes = ['Hulk', 'Thor', 'Hawkeye'];

console.log(heroes);
console.log(heroes.length);
console.log(heroes[0]);
console.log(heroes[heroes.length - 1]);

heroes.push('Iron Man');
heroes.push(5);
heroes.push({ greeting: 'Hi, ik ben een object' });

console.log(heroes[heroes.length - 1]);





