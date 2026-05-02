const burgerMenu = document.querySelector('[data-element="burger-menu"]');
const navLinks = document.querySelector('[data-element="nav-links"]');
const overlay = document.querySelector('[data-element="burger-overlay"]');

if (burgerMenu && navLinks) {
	burgerMenu.addEventListener('click', () => {
		burgerMenu.classList.toggle('open');
		const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
		burgerMenu.setAttribute('aria-expanded', !isExpanded);

		if (!isExpanded) {
			navLinks.classList.add('mobile-open');
			if (overlay) overlay.classList.add('open');
			document.body.classList.add('no-scroll');
		} else {
			navLinks.classList.remove('mobile-open');
			if (overlay) overlay.classList.remove('open');
			document.body.classList.remove('no-scroll');
		}
	});

	if (overlay) {
		overlay.addEventListener('click', () => {
			burgerMenu.classList.remove('open');
			burgerMenu.setAttribute('aria-expanded', 'false');
			navLinks.classList.remove('mobile-open');
			overlay.classList.remove('open');
			document.body.classList.remove('no-scroll');
		});
	}
}
