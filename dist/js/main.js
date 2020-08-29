// Selecting Dom

'strict';
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const copyright = document.getElementById('main-footer');
const title = document.title;
const d = new Date();
const year = d.getFullYear();
copyright.innerHTML = `Copyright &copy; ${year}`;

// Dynamic resume link
const resumeLinks = document.querySelectorAll('#resume');
resumeLinks.forEach(link => {
  link.setAttribute(
    'href',
    'https://drive.google.com/file/d/1BxrmbPMpPJwQSQ4njTb_jpnTgrEIapK-/view?usp=sharing',
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
