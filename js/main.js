// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuProfile = document.querySelector('.menu-profile');
const navItems = document.querySelectorAll('.nav-item');

// Set the initial stage of menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBar.classList.add('show');
        menuNav.classList.add('show');
        menuProfile.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set Menu state
        showMenu = true;
    } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBar.classList.remove('show');
        menuNav.classList.remove('show');
        menuProfile.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Set menu state
        showMenu = false;
    }
}