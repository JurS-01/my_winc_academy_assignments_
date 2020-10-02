const superheroes = [{
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// 1
const heroNames = superheroes.map((hero) => hero.name)
console.log('names of all superheroes:', heroNames)

// 2
const lightWeights = superheroes.filter((hero) => hero.weight < 190)
console.log('all info light weight heroes:', lightWeights)

// 3

const weightTwohundred =
    superheroes.filter((hero) => {
        return hero.weight == '200'
    }).map((hero) => {
        return hero.name
    })
console.log('names of all heroes of 200 pounds:', weightTwohundred)

// 4
const firstAppearances = superheroes.map((hero) => hero.first_appearance)
console.log('comics where heroes appeared in for the 1st time:', firstAppearances)

// 5
const dcHeroes = superheroes.filter((hero) => hero.publisher === 'DC Comics')
const marvelHeroes = superheroes.filter((hero) => hero.publisher === 'Marvel Comics')
console.log('all info from DC heroes', dcHeroes)
console.log('all info from Marvel heroes', marvelHeroes)

// 6
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalDcWeight = dcHeroes.map((hero) => {
    return Number(hero.weight)
}).reduce(reducer)

console.log(`${totalDcWeight}p is the total weight of all DC superheroes`)

// 7
const totalMarvelWeight =
    marvelHeroes.map((hero) => {
        return Number(hero.weight)
    }).filter((hero) => {
        return (!isNaN(hero))
    }).reduce(reducer)

console.log(`${totalMarvelWeight}p is the total weight of all Marvel superheroes`)

// 8
const highestHeroWeight =
    superheroes.map((hero) => {
        return Number(hero.weight)
    }).filter((hero) => {
        return (!isNaN(hero))
    }).reduce((a, b) => {
        return Math.max(a, b)
    })

const heaviestHero =
    superheroes.filter((hero) => {
        return hero.weight == '1400'
    }).map((hero) => {
        return hero.name
    })

console.log(`${heaviestHero} is the most heavy hero and weighs ${highestHeroWeight}p`)