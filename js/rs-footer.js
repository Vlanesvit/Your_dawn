/* ====================================
Инициализация слайдера в блоке rs-footer
==================================== */
function initFooterSliders() {
	if (document.querySelector('.rs-footer')) {
		// Перечень слайдеров
		new Swiper('.footer-logos__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 3000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},

			// Отступ между слайдами
			spaceBetween: 32,

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
			simulateTouch: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,


			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},

				480: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},

				630: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},

				768: {
					slidesPerView: 5,
					slidesPerGroup: 5,
				},
				992: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				1115: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},

				1330: {
					slidesPerView: 5,
					slidesPerGroup: 5,
				},
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initFooterSliders();
});