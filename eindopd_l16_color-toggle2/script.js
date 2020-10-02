const body = document.querySelector('#body');
const colorDescription = document.querySelector('.body__color-description');
const navBar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.navbar img');


menuIcon.addEventListener('mouseover', () => {
    navBar.classList.toggle('show-navbar');
})

navBar.addEventListener('mouseleave', () => {
    navBar.classList.remove('show-navbar');
})


const changeBackground = (color) => {
    if (color == 'red') {
        body.style.background = 'red';
        colorDescription.innerHTML = 'red';
    } else if (color == 'green') {
        body.style.background = 'green';
        colorDescription.innerHTML = 'green';
    } else if (color == 'orange') {
        body.style.background = 'orange';
        colorDescription.innerHTML = 'orange';
    } else if (color == 'yellow') {
        body.style.background = 'yellow';
        colorDescription.innerHTML = 'yellow';
    } else if (color == 'purple') {
        body.style.background = 'purple';
        colorDescription.innerHTML = 'purple';
    } else if (color == 'pink') {
        body.style.background = 'pink';
        colorDescription.innerHTML = 'pink';
    } else {
        body.style.background = 'blue';
        colorDescription.innerHTML = 'blue';
    }
    navBar.classList.remove('show-navbar');
}

console.log(changeBackground());