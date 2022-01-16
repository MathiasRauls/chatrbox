const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')
const navLogo = document.querySelector('#nav-logo')

// Display Mobile Menu

const moblieMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', moblieMenu);

// Close Mobile Menu When Selection Clicked

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 940 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);