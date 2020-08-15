// Selecting Dom

'use strict';

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

//  stat of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));
		// changing menu state
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');

		navItems.forEach((item) => item.classList.remove('show'));
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

//  modal section
//
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('modal-close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
