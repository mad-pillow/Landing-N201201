//=== GO UP BUTTON
const goUpDiv = document.createElement('div');
goUpDiv.classList.add('go-up-btn');
goUpDiv.innerHTML = '<a><p>GO<br>UP</p></a>';
const goUpBtn = goUpDiv.querySelector('a');
goUpBtn.setAttribute('data-target', 'home');
document.body.insertAdjacentElement('afterbegin', goUpDiv);
window.addEventListener('scroll', controlGoUpBtn);

function controlGoUpBtn() {
   if (window.scrollY > 300) {
      goUpDiv.classList.add('show-go-up-btn');
   } else {
      goUpDiv.classList.remove('show-go-up-btn');
   }
}

goUpBtn.addEventListener('click', () => {
   const scrollOptions = {
      left: 0,
      top: 0,
      behavior: 'smooth',
   };

   window.scrollTo(scrollOptions);
});

window.addEventListener('DOMContentLoaded', () => {
   const headerLinks = document.querySelectorAll('.header__menu-link');
   const headerNav = document.querySelector('.header__menu-list');

   function navigate(e) {
      e.preventDefault();
      e = e.target;
      let goToElement = document.querySelector(`#${e.getAttribute('data-target')}`);
      let goToY = 0;

      if (e.getAttribute('data-target') !== 'home') {
         goToY = goToElement.offsetTop - parseInt(getComputedStyle(goToElement).paddingTop);
      } else {
         goToY = 0;
      }
      window.scrollTo({
         top: goToY,
         left: 0,
         behavior: 'smooth',
      });
   }

   headerLinks.forEach(link => {
      link.addEventListener('click', navigate);
   });

   const sections = document.querySelectorAll('[data-nav="section"]');

   function findSection() {
      sections.forEach(section => {
         if (
            section.getBoundingClientRect().top <= document.documentElement.clientHeight * 0.3 ||
            section.getBoundingClientRect().bottom <= document.documentElement.clientHeight
         ) {
            headerLinks.forEach((link, i) => {
               link.classList.remove('header__menu-link--active');
               if (link.getAttribute('data-target') == section.getAttribute('id')) {
                  link.classList.add('header__menu-link--active');
               }
            });
         }
      });
   }

   findSection();

   window.addEventListener('scroll', findSection);
   const burgerPanel = document.querySelector('.header__menu');
   const burgerMenuBtn = document.querySelector('.burger-menu-btn');
   const burgerMenuLinks = document.querySelectorAll('.header__menu-link');

   function triggerBurgerMenu() {
      if (burgerPanel.classList.contains('header__menu--closed')) {
         burgerPanel.classList.remove('header__menu--closed');
         document.body.style.overflow = 'hidden';
      } else {
         burgerPanel.classList.add('header__menu--closed');
         document.body.style.overflow = 'auto';
      }
   }

   burgerMenuBtn.addEventListener('click', triggerBurgerMenu);

   burgerPanel.addEventListener('click', e => {
      burgerMenuLinks.forEach(link => {
         if (e.target === link) {
            triggerBurgerMenu();
         }
      });
   });
});