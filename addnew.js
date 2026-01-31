// menu button
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');


const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {

    mobileMenu.classList.toggle('hidden');

    //Change the button icon between ☰ and ✕
    if (mobileMenu.classList.contains('hidden')) {
        menuBtn.textContent = '☰';
    } else {
        menuBtn.textContent = '✕';
    }
});