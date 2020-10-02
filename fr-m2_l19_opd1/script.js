// 1 Add elements to DOM
const allAnimalBtns = document.getElementsByClassName('big-five-button');
const spottedList = document.getElementById('spotted-animals-list');

const addSpottedAnimal = (e) => {
    const newSpottedAnimal = document.createElement('li')
    spottedList.appendChild(newSpottedAnimal)
    newSpottedAnimal.innerHTML = e.target.innerHTML
}

for (i = 0; i < allAnimalBtns.length; i++) {
    const animalBtn = allAnimalBtns[i]
    animalBtn.addEventListener('click', addSpottedAnimal)
}

// 2 Remove elements from DOM
const removeFirstBtn = document.getElementById('remove-first-item-button');

removeFirstBtn.addEventListener('click', () => {
    const firstSpottedItem = spottedList.getElementsByTagName('li')[0];
    spottedList.removeChild(firstSpottedItem)
})

// 3 Remove multiple elements from DOM
const removeAllBtn = document.getElementById('remove-all-button');

removeAllBtn.addEventListener('click', () => {
    while (spottedList.hasChildNodes()) {
        spottedList.removeChild(spottedList.firstChild)
    }
})