import {
    randomPersonData
} from './randomPersonData.js'
import {
    mainList
} from './variables.js'
import {
    listMatches
} from './variables.js'
import {
    countrySelectorContainer
} from './variables.js'
import {
    clearMainList
} from './variables.js'
import {
    clearAll
} from './variables.js'
import {
    addDescription
} from './variables.js'
import {
    addList
} from './variables.js'
import {
    sortByRegion
} from './variables.js'
import {
    sortByName
} from './variables.js'
import {
    removeDuplicates
} from './variables.js'



// 1. LANDENLIJST

const addCountryList = () => {
    clearAll(), addDescription('All Countries'), sortByRegion(randomPersonData)
    const uniqueRegions = removeDuplicates(randomPersonData, person => person.region);
    uniqueRegions.forEach(person => addList(mainList, `${person.region}`))
}
document.getElementsByClassName('country-btn')[0].addEventListener('click', addCountryList)



// 2. STEENBOKVROUWEN

const listFemaleCapricorns = () => {
    clearAll(), addDescription('Female Capricorns 30+'), sortByName(randomPersonData)
    randomPersonData.forEach(person => {
        if (person.gender === "female" && person.age > 30 && getZodiacSign(person.birthday.dmy) == 'Capricorn') {
            addList(mainList, `${person.name} ${person.surname} <br><img src=\"${person.photo}">`);
        }
    })
}
document.getElementsByClassName('capricorn-btn')[0].addEventListener('click', listFemaleCapricorns)


const getZodiacSign = birthday => {
    const parts = birthday.split('/');
    const day = parts[0];
    const month = parts[1];
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return 'Capricorn';
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return 'Aquarius';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return 'Pisces';
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return 'Aries';
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return 'Taurus';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return 'Gemini';
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return 'Cancer';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return 'Leo';
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return 'Virgo';
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return 'Libra';
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return 'Scorpio';
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return 'Sagittarius';
    }
}


// 3. OUDE CREDITCARDS

const today = new Date();
const nextYear = new Date();
const getYear = today.getFullYear() + 1;
nextYear.setFullYear(getYear);

const listOldCards = () => {
    clearAll(), addDescription('Soon to expire creditcards (adults)')
    randomPersonData.forEach(person => {
        const partsDate = person.credit_card.expiration.split('/')
        const fullYear = `20${partsDate[1]}`
        const fullDate = new Date(fullYear, partsDate[0] - 1, 1);
        if (person.age > 17 && fullDate > today && fullDate < nextYear) {
            addList(mainList, `${person.name} ${person.surname}<br>${person.phone}<br>${person.credit_card.expiration}`);
        }
    })
}
document.getElementsByClassName('old-cards-btn')[0].addEventListener('click', listOldCards)



// 4. MEESTE MENSEN

const getPopulationCountries = () => {
    clearAll(), sortByRegion(randomPersonData), addDescription('Number of clients per country')
    const allCountries = randomPersonData.map(person => person.region)
    let uniqueCountries = [...new Set(allCountries)];
    let countDuplicates = uniqueCountries.map(country => [country, allCountries.filter(str => str === country).length]);
    countDuplicates.sort((a, b) => b[1] - a[1]);
    countDuplicates.forEach(countryCount => addList(mainList, `${countryCount[0]} (${countryCount[1]})`));
}
document.getElementsByClassName('country#-btn')[0].addEventListener('click', getPopulationCountries)



//  5. GEMIDDELDE LEEFTIJD

const addCountryButtonsToDom = () => {
    clearAll(), addDescription('Average age per country'), sortByRegion(randomPersonData);
    const uniqueRegions = removeDuplicates(randomPersonData, person => person.region);
    uniqueRegions.forEach(person => addList(countrySelectorContainer, `<button class="age-country-btn">${person.region}</>`))
    const countryButtons = document.querySelectorAll('.age-country-btn')
    countryButtons.forEach(button => button.addEventListener('click', getAverageAge))
}
document.getElementsByClassName('average-age-btn')[0].addEventListener('click', addCountryButtonsToDom)


const getAverageAge = () => {
    clearMainList()
    const countryBtn = event.target
    const locals = randomPersonData.filter(person => person.region === countryBtn.innerText)
    const allAgesInCountry = locals.map(person => Number(person.age))
    const averageAge = Math.round(allAgesInCountry.reduce((a, b) => a + b) / allAgesInCountry.length);
    addList(mainList, `The average age in ${countryBtn.innerText} is ${averageAge}`)
}



/// 6. MATCHMAKING

const addAllUsersToDom = () => {
    clearAll(), sortByName(randomPersonData), addDescription(`Select person to find matches`);
    randomPersonData.forEach(person => {
        addList(mainList, `${person.name} ${person.surname}<br>${person.region}<br>
        ${person.gender}<br>${person.age}<br>${getZodiacSign(person.birthday.dmy)}<br><img src=\"${person.photo}"><br>
        <button class="find-match-btn" value="${getZodiacSign(person.birthday.dmy)}/${person.gender}">find match</button>`);
    })
    const findMatchButtons = document.querySelectorAll('.find-match-btn')
    findMatchButtons.forEach(button => button.addEventListener('click', findMatch))
}
document.getElementsByClassName('matchmaking-btn')[0].addEventListener('click', addAllUsersToDom)


const findMatch = () => {
    clearAll(), addDescription('Selected person')
    addList(mainList, `${event.target.parentElement.innerHTML}<br><br><br><h3>Matches found</h3>`)
    const selectedValues = event.target.value.split('/');
    randomPersonData.forEach(person => {
        if (getZodiacSign(person.birthday.dmy) === selectedValues[0] && person.gender != selectedValues[1]) {
            addList(listMatches, `${person.name} ${person.surname}<br>${person.region}<br>${person.gender}<br>
            ${person.age}<br>${getZodiacSign(person.birthday.dmy)}<br><img src=\"${person.photo}">`)
        }
    })
}