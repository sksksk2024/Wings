const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');
let resizeTimeout;

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenu.style.transition = '';
  main.setAttribute('inert', '');
  body.classList.add('no-scroll', 'menu-open');
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', '');
  main.removeAttribute('inert');
  body.classList.remove('no-scroll', 'menu-open');
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    topNavMenu.setAttribute('inert', '');
    topNavMenu.style.transition = 'none';
  } else {
    // is tablet/desktop
    closeMobileMenu();
    topNavMenu.removeAttribute('inert');
  }
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', (e) => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(() => setupTopNav(e), 150);
});

let angle = 0;

function galleryspin(sign) { 
  const spinner = document.querySelector("#spinner");
  angle = sign ? angle - 120 : angle + 120;
  spinner.style.transform = `rotateY(${angle}deg)`;
}

document.addEventListener('DOMContentLoaded', () => {
  const updateDateElement = document.getElementById('update-date');
  if (updateDateElement) {
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = lastModified.toLocaleDateString(undefined, options);
    updateDateElement.textContent = formattedDate;
  }
});

function toggleMenu() {
  const isOpen = body.classList.toggle('menu-open');
  btnOpen.setAttribute('aria-expanded', isOpen);
  btnClose.setAttribute('aria-expanded', isOpen);
  topNavMenu.style.opacity = isOpen ? '1' : '0';
}