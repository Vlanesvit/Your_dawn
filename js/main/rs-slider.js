/* ====================================
Инициализация слайдера в блоке rs-slider
==================================== */
function initMainSliders() {
	if (document.querySelector('.rs-slider')) {
		// Перечень слайдеров
		const sliderText = new Swiper('.slider-text__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 7000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},

			// Кол-во показываемых слайдов
			slidesPerView: 1,

			// // Отступ между слайдами
			// spaceBetween: 30,

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 800,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: false,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			// Пагинация
			pagination: {
				el: '.rs-slider-pagination',
				clickable: true,
				dynamicBullets: true,
			},

			effect: 'fade',

			// Навигация
			navigation: {
				prevEl: ".rs-slider-button-prev",
				nextEl: ".rs-slider-button-next",
			},
		});

		const sliderImg = new Swiper('.slider-product__slider', {
			// Кол-во показываемых слайдов
			slidesPerView: 1,

			effect: 'fade',

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 800,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: false,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
		});

		// Связка слайдеров
		sliderText.controller.control = sliderImg;
		sliderImg.controller.control = sliderText;
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initMainSliders();
});