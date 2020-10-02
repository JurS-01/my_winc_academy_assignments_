export const mainList = document.getElementById('list-ul');
export const listMatches = document.getElementById('matches-ul');
export const countrySelectorContainer = document.getElementById('country-selector-btns');

export const clearMainList = () => mainList.innerHTML = "";
export const clearAll = () => {
    mainList.innerHTML = "";
    listMatches.innerHTML = "";
    countrySelectorContainer.innerHTML = "";
}

export const addList = (listElement, htmlContent) => {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = htmlContent
    listElement.appendChild(newListItem);
}

export const addDescription = description => {
    const filterDescripton = document.getElementById('filter-description');
    filterDescripton.innerHTML = description;
}

export const sortByRegion = list => list.sort((a, b) => a.region.localeCompare(b.region));
export const sortByName = list => list.sort((a, b) => a.name.localeCompare(b.name));

export const removeDuplicates = (data, key) => {
    return [...new Map(data.map(person => [key(person), person])).values()]
}