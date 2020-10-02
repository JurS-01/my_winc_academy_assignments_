let colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (k = 0; k < colors.length; k++) {
    console.log(colors[k]);
}

colors.forEach(e => console.log(e));


/*
1) while - 5 regels, for - 3 regels
2) forEach - 1 regel
3) forEach is het duidelijkste, door de benaming 'for Each' en de korte code
*/

//4) Looping through the properties of an object.

const vraagVier = {
    objectA: 1,
    objectB: 2,
    objectC: 3,
    objectD: 4,
    objectE: 5,
}

for (const xx in vraagVier) {
    console.log(`${xx}: ${vraagVier[xx]}`);
}

//Let op, bij vraagVier[xx] gebruik maken van []


// nog even iets uitproberen
colors.forEach(function (e, colorNumber) {
    console.log(`Color number ${colorNumber} has color ${e}`);
}
)