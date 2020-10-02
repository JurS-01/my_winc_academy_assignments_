const tellFortune = (howManyKids, namePartner, geoLocation, occupation) => {
    return `You will be a ${occupation} in ${geoLocation}, and married to ${namePartner} with ${howManyKids} kids `;
}

console.log(tellFortune(3, 'John', 'Amsterdam', 'developer'));
console.log(tellFortune(2, 'Johnny', 'Leiden', 'dancer'));
console.log(tellFortune(15, 'Jonathan', 'Rotterdam', 'rock star'));
