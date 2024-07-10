const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenu.removeAttribute('style');
  main.setAttribute('inert', '');
  //bodyScrollLockUpgrade.disableBodyScroll(body);
  body.classList.add('no-scroll'); // Prevent scrolling
  body.classList.add('menu-open'); // Add class to hide sliders
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', '');
  main.removeAttribute('inert');
  //bodyScrollLockUpgrade.enableBodyScroll(body);
  body.classList.remove('no-scroll'); // Allow scrolling
  body.classList.remove('menu-open'); // Remove class to show sliders
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log('is mobile');
    topNavMenu.setAttribute('inert', '');
    topNavMenu.style.transition = 'none';
  } else {
    // is tablet/desktop
    console.log('is desktop');
    closeMobileMenu();
    topNavMenu.removeAttribute('inert');
  }
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupTopNav(e);
});

var angle = 0;

function galleryspin(sign) { 
  var spinner = document.querySelector("#spinner");
  if (!sign) { 
    angle = angle + 120; 
  } else { 
    angle = angle - 120; 
  }
  spinner.setAttribute("style","transform: rotateY("+ angle +"deg);");
}