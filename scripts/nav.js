
const navigationContainer = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');


// Toggle nav drop down
function navToggle(){
    const tabletView = window.matchMedia('only screen and (min-width: 768px)');
    if(tabletView.matches) return;

    
    const hold = document.querySelector('.hold');
    const bars = Array.from(document.getElementsByClassName('bar'));
    const navList = document.querySelector('.nav-list');

    hold.classList.toggle('active');
    navList.classList.toggle('nav--show');
    overlay.classList.toggle('overlay--show');
    
    bars.forEach((bar) => {
      bar.classList.remove('no-animation');
    });
}

navigationContainer.addEventListener('click', (evt) => {
  
  if( evt.target.classList.contains('overlay') ||
      evt.target.classList.contains('nav-mb')   ||
      evt.target.classList.contains('nav-list__item-link') ||
      evt.target.classList.contains('bar')) navToggle();
});
overlay.addEventListener('click', navToggle);






