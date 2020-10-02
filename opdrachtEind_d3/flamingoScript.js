// window.onscroll = function () { stickyHeader() };

// var header = document.getElementById('MyHeader');
// var sticky = header.offsetTop;

// function stickyHeader() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// }

window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// https://www.youtube.com/watch?v=6HFpw5fcaD8

// .sticky class in css has position: fixed;