const hamburger = document.querySelector('.hamburger-btn');
const closeBtn = document.getElementById('closeNav');
const navOverlay = document.getElementById('mobileNav');

if (hamburger && navOverlay) {
	hamburger.addEventListener('click', () => {
		navOverlay.classList.add('is-open');
		navOverlay.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
	});
}

if (closeBtn && navOverlay) {
	closeBtn.addEventListener('click', () => {
		navOverlay.classList.remove('is-open');
		navOverlay.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
	});
}
