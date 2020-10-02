const personList = [{
        name: "N. Armstrong",
        profession: "spacecowboy",
        age: 89
    },
    {
        name: "H. de Haan",
        profession: "kippen hypnotiseur",
        age: 59
    },
    {
        name: "A. Curry",
        profession: "kikvorsman",
        age: 32
    },
    {
        name: "F. Vonk",
        profession: "slangenmelker",
        age: 36
    },
    {
        name: "B. Bunny",
        profession: "konijnen uitlaatservice",
        age: 27
    },
    {
        name: "Dr.Evil",
        profession: "digital overlord",
        age: 56
    }
];

for (let person of personList) {
    console.log("alle info van deze persoon:", person);
    console.log("naam:", person.name);
    const birthYear = 2020 - person.age;
    console.log("geboortejaar:", birthYear);
    console.log(`${person.name} is een ${person.profession}`)
    if (person.age > 50) {
        console.log(`${person.name} is ouder dan 50`)
    } else {
        console.log(`${person.name} is niet ouder dan 50`)
    }
}