
let alertButton = document.querySelector('#mybutton');
let backgroundButton = document.querySelector('#bgbutton');
// let pageBody = document.getElementsByTagName('body');


alertButton.addEventListener("click", function () {
    alert("button clicked!");
})

backgroundButton.addEventListener('click', function (e) {
    e.target.parentElement.classList.toggle('red-background');
})

