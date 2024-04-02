console.clear();

function LogoguideSwiper__init() {
	const swiper = new Swiper('.logoguide-01 .logo-01-window .logo-01-wrap .swiper', {
		direction: 'horizontal',
		loop: true,
		navigation: {
			nextEl: '.logoguide-01 .logo-01-window .swiper-button-next',
			prevEl: '.logoguide-01 .logo-01-window .swiper-button-prev',
		},
	});
}

// Initializing Swiper
LogoguideSwiper__init();