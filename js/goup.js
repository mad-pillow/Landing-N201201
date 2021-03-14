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
