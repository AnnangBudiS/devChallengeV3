const closeNav = document.querySelector('.closebtn');
const openNav = document.querySelector('.openbtn');


openNav.addEventListener('click', () => {
    document.querySelector('.nav-item').style.width = '100%';
})

closeNav.addEventListener('click', () => {
    document.querySelector('.nav-item').style.width = '0%';

})