const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(max-width: 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  body.classList.add('no-scroll', 'menu-open'); // Prevent scrolling and show menu
  setTimeout(() => {
    topNavMenu.style.opacity = '1'; // Ensure the transition takes effect
    topNavMenu.style.transform = 'translateY(0)';
    topNavMenu.style.pointerEvents = 'auto'; // Allow interactions
  }, 10); // Slight delay to ensure styles are applied correctly
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', '');
  body.classList.remove('no-scroll', 'menu-open'); // Allow scrolling and hide menu
  topNavMenu.style.opacity = '0'; // Start transition
  topNavMenu.style.transform = 'translateY(-100%)';
  topNavMenu.style.pointerEvents = 'none'; // Prevent interactions
  btnOpen.focus();
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    topNavMenu.setAttribute('inert', '');
    topNavMenu.style.opacity = '0';
    topNavMenu.style.transform = 'translateY(-100%)';
    topNavMenu.style.pointerEvents = 'none';
  } else {
    // is tablet/desktop
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

//last updated
document.addEventListener('DOMContentLoaded', () => {
  const updateDateElement = document.getElementById('update-date');
  if (updateDateElement) {
    const lastModified = new Date(document.lastModified);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options); // Explicitly setting locale to 'en-US'

    updateDateElement.textContent = formattedDate;
  }
});

//not see the relative objects once the burger menu is open
function toggleMenu() {
  const body = document.body;
  const btnOpen = document.getElementById('btnOpen');
  const btnClose = document.getElementById('btnClose');
  const menu = document.querySelector('.topnav__menu');

  const isOpen = body.classList.toggle('menu-open');
  btnOpen.setAttribute('aria-expanded', isOpen);
  btnClose.setAttribute('aria-expanded', isOpen);
  menu.style.opacity = isOpen ? '1' : '0';
  menu.style.pointerEvents = isOpen ? 'auto' : 'none'; // Allow interactions when menu is open
}