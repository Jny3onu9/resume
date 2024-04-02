console.clear();

function PcCardnewsSwiper__init() {
	const swiper = new Swiper('.cardnews-01 .cn-01-window .cn-01-wrap .swiper', {
		direction: 'horizontal',
		loop: true,
		navigation: {
			nextEl: '.cardnews-01 .cn-01-window .swiper-button-next',
			prevEl: '.cardnews-01 .cn-01-window .swiper-button-prev',
		},
	});
}

// Initializing Swiper
PcCardnewsSwiper__init();