/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*=====MENU SHOW=====*/
/* Validate if constant exists*/
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/*=====MENU CLOSE=====*/
/* Validate if constant exists*/
if(navClose){
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = Array.from(document.querySelectorAll('.nav__link'));

function linkAction(){
  navMenu.classList.remove('show-menu');
}

navLink.forEach(nav=> nav.addEventListener('click', linkAction));





/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
