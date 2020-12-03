// Selecting Dom

'strict';
const menuBtn = document.querySelector('.menu-btn');
// const cookieBtn = document.getElementById('cookie-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const copyright = document.getElementById('main-footer');
const title = document.title;
const d = new Date();
const year = d.getFullYear();
copyright.innerHTML = `Copyright &copy Gagik Navasatariyan ${year}`;

// Dynamic resume link

const resumeLinks = document.querySelectorAll('#resume');
resumeLinks.forEach(link => {
  link.setAttribute(
    'href',
    'https://docs.google.com/document/d/1N17EG88BK6r69n1j6mIruQn_CsSolwrmbjeukHs-2VE/edit?usp=sharing',
  );
});

//  stat of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    // changing menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');

    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}

// ! ********************************* //
// Cookie Section

// % Appending to all pages

$('footer').after('<div id="cookie-notice" class="hidden"></div>');
$('#cookie-notice').append('<p id="cookie-text"></p>');
$('#cookie-text').text(
  'I use cookies and other tracking technologies to improve your browsing experience on my website. By browsing my website, you consent to my use of cookies and other tracking technologies and I assume you are happy with that.',
);
$('#cookie-notice').append(
  '<button id="cookie-btn" class="btn-light">OK</button>',
);

// Show cookie notice with delay

function showCookieNotice() {
  setTimeout(() => {
    $('#cookie-notice').removeClass('hidden');
    $('#cookie-notice').addClass('show');
  }, 500);
}

// Closing cookie notice

$('#cookie-btn').click(() => {
  cookieStorage.setCookie('isCookieUsed', true, 30);
  $('#cookie-notice').addClass('hidden');
});

//  Cookie Get Set functions

const cookieStorage = {
  getCookie: item => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[item];
  },

  setCookie: (key, value, exdays) => {
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = `${key}=${value}; ${expires}`;
  },
};
console.log(typeof cookieStorage.getCookie('isCookieUsed'));

if (cookieStorage.getCookie('isCookieUsed') !== 'true') {
  $('window').on('load', showCookieNotice());
  // Set cookies here
  cookieStorage.setCookie('isCookieUsed', true, 30);
}

// this switch is added to change footer icons dynamically

switch (title) {
  case 'About Me':
    $('#f-about').addClass('inactive');
    break;
  case 'My Work':
    $('#f-portfolio').addClass('inactive');

    break;
  case 'Contact Me':
    $('#f-contact').addClass('inactive');

    break;
  default:
}

//  Hover effect on project cards
console.log($('.projects .item .overlay').length);

for (let index = 0; index < $('.projects .item .overlay').length; index++) {
  const element = $('.projects .item ')[index];
  const overlayElement = $('.projects .item .overlay')[index];

  $(element).hover(
    () => {
      $(overlayElement).addClass('show');
    },
    () => {
      $(overlayElement).removeClass('show');
    },
  );
}
