// A
const addTheWordCool = (array) => {
    array.push('cool');
    return array
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// B
const amountOfElementsInArray = (peerList) => peerList.length
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

// C
const selectBelgiumFromBenelux = (countryList) => countryList[0]
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

// D
const lastElementInArray = (animalList) => animalList[animalList.length - 1]
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = (array) => {
    const slicedArray = array.slice(1, 4)
    return slicedArray
}

const impeachTrumpSplice = (array) => {
    array.splice(0, 1)
    return array
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
const stringsTogether = (array) => array.join(' ')
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

// G
const combineArrays = (array1, array2) => {
    const concattedArrays = array1.concat(array2)
    console.log(concattedArrays)
}
combineArrays([1, 2, 3], [4, 5, 6])