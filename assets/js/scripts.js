const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelector('.nav-items');
const logo = document.querySelector('.logo');
const closeNav = document.querySelector('.nav-close');

navMenu.addEventListener('click', () => {
	navMenu.classList.toggle('open');
	navItems.classList.toggle('hidden');
	logo.classList.toggle('move-left');
});

closeNav.addEventListener('click', () => {
	navMenu.classList.toggle('open');
	navItems.classList.toggle('hidden');
	logo.classList.toggle('move-left');
});
