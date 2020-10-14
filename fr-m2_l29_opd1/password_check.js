const conditions = {
    hasDigit: password => /\d/.test(password),
    hasUpperCaseCharacter: password => /[A-Z]/.test(password), // other option: str.toLowerCase() !== str;
    hasLowerCaseCharacter: password => /[a-z]/.test(password), // other option: str.toUpperCase() !== str;
    hasRightLength: password => {
        if ([...password].length >= 3 && [...password].length <= 9) {
            return true
        } else {
            false
        }
    },
    isNotNull: password => {
        if (password !== "" && password !== null) {
            return true
        } else {
            return false
        }
    },
}



const minimumConditionsReached = (password) => {
    const trueCount = [conditions.hasDigit(password), conditions.hasUpperCaseCharacter(password), conditions.hasLowerCaseCharacter(password), conditions.hasRightLength(password), conditions.isNotNull(password)];
    if (trueCount.filter(Boolean).length >= 3) {
        return true
    } else {
        return false
    }
}


const verifyPassword = (password) => {
    if (minimumConditionsReached(password) && conditions.hasLowerCaseCharacter(password)) {
        return true
    } else {
        return false
    }
}


module.exports = {
    conditions,
    minimumConditionsReached,
    verifyPassword,
}


/*
UITLEG JUSTIN:

module.exports = {
    conditions,
    minimumConditionsReached,
}
Hier zet je de module.exports gelijk aan een object met daarin de functies. Als je dit later
importeert met require dan krijg je dit object terug. Om hier vervolgens specifieke functies
uit te halen kun je het object importeren met const functions = require("./password_check");
en dan dit functions object gebruiken (bijv: const result = functions.add(4, 4);). Zoals je
hier ziet moet je dan functions. voor de specifieke functie zetten, omdat deze in het object
zit.

Een andere manier om de functies van een object te gebruiken is om niet het hele object te
pakken, maar alleen de waardes te pakken die je nodig hebt. Dit doe je door de brackets
({ en }) te gebruiken. Dan wordt het dus const { add } = require("./password_check"). Op deze
manier kun je direct gebruik maken van de functies (bijv: const result = add(4,4);).
*/