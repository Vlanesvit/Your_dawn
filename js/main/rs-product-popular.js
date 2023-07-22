/* ====================================
Инициализация слайдера в блоке rs-product-popular
==================================== */
function initProductSliders() {
	if (document.querySelector('.rs-product-popular')) {
		// Перечень слайдеров
		const sliderProduct = new Swiper('.rs-product-popular__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 5000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},

			// Отступ между слайдами
			spaceBetween: 30,

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

			// Пагинация
			pagination: {
				el: '.rs-product-popular-pagination',
				clickable: true,
				dynamicBullets: true,
			},

			// Навигация
			navigation: {
				prevEl: ".rs-product-popular-button-prev",
				nextEl: ".rs-product-popular-button-next",
			},


			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
				992: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				1300: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
				1600: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				}
			},
		});

		if (sliderProduct.slides.length > 5) {
			sliderProduct
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initProductSliders();
});