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
let newSwiper = new Swiper(".new-swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  centeredSlides: true,  
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 80,
    },
  },
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = Array.from(document.querySelectorAll('section[id]'));
console.log('sections--', sections);
function scrollActive(){
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add('active-link');
    }else{
      document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else{
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
      darkTheme = 'dark-theme',
      iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
      selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
      getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon': 'bx bx-sun';

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[getCurrentIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', ()=>{
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__img, .new__container, .footer__container`);
sr.reveal(`.home__data`, {delay: 500});
sr.reveal(`.giving__content, .gift__card`,{interval: 100});
sr.reveal(`.celebrate__data, .message__form, .footer__img1`,{origin: 'left'});
sr.reveal(`.celebrate__img, .message__img, .footer__img2`,{origin: 'right'});