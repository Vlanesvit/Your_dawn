/* ====================================
Инициализация слайдера в блоке rs-catalog
==================================== */
function initCatalogSliders() {
	if (document.querySelector('.rs-catalog')) {
		// Перечень слайдеров
		new Swiper('.rs-catalog__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 5000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},

			// Кол-во показываемых слайдов
			slidesPerView: 5,

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
				el: '.rs-catalog-pagination',
				clickable: true,
				dynamicBullets: true,
			},

			// Навигация
			navigation: {
				prevEl: ".rs-catalog-button-prev",
				nextEl: ".rs-catalog-button-next",
			},

			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				580: {
					slidesPerView: 2,
				},
				860: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
				1610: {
					slidesPerView: 5,
				}
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initCatalogSliders();
});