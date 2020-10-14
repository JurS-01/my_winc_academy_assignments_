/*
We hebben de volgende condities die we gebruiken:
1 - password is korter dan 9 karakters
2 - password is niet null
3 - password heeft 1 of meer uppercase karakters
4 - password heeft 1 of meer lowercase karakters
5 - password heeft 1 of meer cijfers

Een wachtwoord wordt alléén goedgekeurd als:
- tenminste 3 van de bovenstaande condities true zijn
- conditie 4 true is (die moet dus altijd true zijn)
*/


// isNotNull, hasRightLength, hasDigit, hasUpperCaseCharacter, hasLowerCaseCharacter
// minimumConditionsReached, verifyPassword
//////////////////////////////////////////////////////


const conditions = require("./password_check.js");
// const hasRightLength = require("./password_check.js");
// const hasDigit = require("./password_check.js");
// const isNotNull = require("./password_check.js");
// const hasUpperCaseCharacter = require("./password_check.js");
// const hasLowerCaseCharacter = require("./password_check.js");

test("has more then 2 and less than 9 characters", () => {
    const password1 = "SmileLots44&8"
    const password2 = "CofFeE0"
    const password3 = ""
    const password4 = "e4"

    // expect(hasRightLength(password1)).toBeFalsey();
    expect(conditions.hasRightLength(password1)).not.toBe(true); // Fail
    expect(conditions.hasRightLength(password2)).toBe(true); // Pass
    expect(conditions.hasRightLength(password3)).not.toBe(true); // Fail
    expect(conditions.hasRightLength(password4)).not.toBe(true); // Fail
});


test("has at least 1 digit", () => {
    const password1 = "Smile204544&8"
    const password2 = "Smile"
    const password3 = "1digitInThisPW"
    const password4 = ""

    expect(conditions.hasDigit(password1)).toBe(true); // Pass
    expect(conditions.hasDigit(password2)).not.toBe(true); // Fail
    expect(conditions.hasDigit(password3)).toBe(true); // Pass
    expect(conditions.hasDigit(password4)).not.toBe(true); // Fail
});

test("has at least 1 upper case character", () => {
    const password1 = "Smile44&8"
    const password2 = "smiling8!"
    const password3 = "MANY_SMILES"
    const password4 = ""


    expect(conditions.hasUpperCaseCharacter(password1)).toBe(true); // Pass
    expect(conditions.hasUpperCaseCharacter(password2)).not.toBe(true); // Fail
    expect(conditions.hasUpperCaseCharacter(password3)).toBe(true); // Pass
    expect(conditions.hasUpperCaseCharacter(password4)).not.toBe(true); // Fail
});

test("has at least 1 lower case character", () => {
    const password1 = "Smile44&8"
    const password2 = ""
    const password3 = "MANY_SMILES"

    expect(conditions.hasLowerCaseCharacter(password1)).toBe(true); // Pass
    expect(conditions.hasLowerCaseCharacter(password2)).not.toBe(true); // Fail
    expect(conditions.hasLowerCaseCharacter(password3)).not.toBe(true); // Fail
});

test("is not null", () => {
    const password1 = "Smile44&8"
    const password2 = ""
    const password3 = null

    expect(conditions.isNotNull(password1)).toBe(true); // Pass
    expect(conditions.isNotNull(password2)).not.toBe(true); // Fail
    expect(conditions.isNotNull(password3)).not.toBe(true); // Fail
});


// // minimumConditionsReached

test("at least 3 conditions are met", () => {
    const password1 = "henkie1"
    const password2 = ""
    const password3 = "1234a"
    const password4 = "z"
    const password5 = "henkie1234"
    const password6 = "HENKhenk!"
    const password7 = "1234"
    const password8 = "HENK33$"
    const password9 = "zW1"
    const password10 = "HENK&FATIMA"


    expect(minimumConditionsReached(password1)).toBe(true); // Pass
    expect(minimumConditionsReached(password2)).not.toBe(true); // Fail
    expect(minimumConditionsReached(password3)).toBe(true); // Pass
    expect(minimumConditionsReached(password4)).not.toBe(true); // Fail
    expect(minimumConditionsReached(password5)).toBe(true); // Pass
    expect(minimumConditionsReached(password6)).toBe(true); // Pass
    expect(minimumConditionsReached(password7)).toBe(true); // Pass
    expect(minimumConditionsReached(password8)).toBe(true); // Pass
    expect(minimumConditionsReached(password9)).toBe(true); // Pass
    expect(minimumConditionsReached(password10)).toBe(true); // Pass

});


test("at least 3 conditions are met and has lower case character", () => {
    const password1 = "henkie1"
    const password2 = ""
    const password3 = "1234a"
    const password4 = "z"
    const password5 = "henkie1234"
    const password6 = "HENKhenk!"
    const password7 = "1234"
    const password8 = "HENK33$"
    const password9 = "zW1"
    const password10 = "HENK&FATIMA"


    expect(verifyPassword(password1)).toBe(true); // Pass
    expect(verifyPassword(password2)).not.toBe(true); // Fail
    expect(verifyPassword(password3)).toBe(true); // Pass
    expect(verifyPassword(password4)).not.toBe(true); // Fail
    expect(verifyPassword(password5)).toBe(true); // Pass
    expect(verifyPassword(password6)).toBe(true); // Pass
    expect(verifyPassword(password7)).toBe(true); // Pass
    expect(verifyPassword(password8)).not.toBe(true); // Pass
    expect(verifyPassword(password9)).toBe(true); // Pass
    expect(verifyPassword(password10)).not.toBe(true); // Pass

});