// A
const superheroes = [{
        name: "Batman",
        alter_ego: "Bruce Wayne"
    },
    {
        name: "Superman",
        alter_ego: "Clark Kent"
    },
    {
        name: "Spiderman",
        alter_ego: "Peter Parker"
    }
]

const findSpiderMan = (array) =>
    array.find((hero) => hero.name === 'Spiderman')

console.log(findSpiderMan(superheroes))

// B
const doubleArrayValues = (array) =>
    array.forEach((numb) => console.log(numb * 2));

doubleArrayValues([1, 2, 3])

// C
const containsNumberBiggerThan10 = (array) =>
    array.every((numb) => console.log(numb > 10));

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
containsNumberBiggerThan10([1, 2, 1, 2, 1, 2])

// D
const isItalyInTheGreat7 = (array) =>
    console.log(array.includes('Italy'))

isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'])

// E
const tenfold = (array) =>
    array.forEach((numb) => console.log(numb * 10))

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

// F
const isBelow100 = (array) =>
    array.every((numb) => numb < 100)

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))

// G
const bigSum = (array) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer)
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))