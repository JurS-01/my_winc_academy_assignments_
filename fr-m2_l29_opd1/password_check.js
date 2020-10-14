const conditions = {
    hasDigit: password => /\d/.test(password),
    hasUpperCaseCharacter: password => /[A-Z]/.test(password),
    hasLowerCaseCharacter: password => /[a-z]/.test(password),
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

console.log(verifyPassword("!"));

// module.exports.conditions = conditions
// module.exports.minimumConditionsReached = minimumConditionsReached

// exports.conditions = conditions
// exports.minimumConditionsReached = minimumConditionsReached

// module.exports = {
//     conditions: conditions,
//     minimumConditionsReached: minimumConditionsReached,
// }

// module.exports = {
//     conditions,
//     minimumConditionsReached,
// }