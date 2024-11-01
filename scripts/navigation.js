const buttons = document.querySelectorAll('[data-nav-button]');

buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		const offset = button.dataset.navButton === 'next' ? 1 : -1;
		const slides = document.querySelector('[data-slides]');
		const activeSlide = document.querySelector('[data-active]');
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;

		const pageDots = document.querySelector('[data-dots]');
		const selectedDot = document.querySelector('[data-selected]')
		let pageDotsIndex = [...pageDots.children].indexOf(selectedDot) + offset;

		if (newIndex < 0) {
			newIndex = slides.children.length -1
			pageDotsIndex = pageDots.children.length -1;
		};
		if (newIndex > slides.children.length -1) {
			newIndex = 0
			pageDotsIndex = 0;
		};

		pageDots.children[pageDotsIndex].dataset.selected = true;
		delete selectedDot.dataset.selected;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	})
})