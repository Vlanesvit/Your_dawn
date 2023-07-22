/* ====================================
Мобильное меню
==================================== */
const burger = () => {
	const mobileMenu = document.querySelectorAll('.menu');
	const menuMainList = document.querySelectorAll('.dropdown > a');

	mobileMenu.forEach(menu => {
		const burgerBtn = menu.querySelector('.menu__icon');
		const burgerMenuBody = menu.querySelector('.menu__body');

		if (burgerBtn) {
			burgerBtn.addEventListener('click', function () {

				// Закрытие подменю при клинке на бургер
				for (let i = 0; i < menuMainList.length; i++) {
					if (menuMainList[i].closest('.dropdown').classList.contains('_open')) {
						menuMainList[i].closest('.dropdown').classList.remove('_open');
					}
				}

				burgerBtn.classList.toggle('_icon-open');
				burgerMenuBody.classList.toggle('_menu-active');
			});
		}

	});

	menuMainList.forEach(menuMainBtn => {
		menuMainBtn.addEventListener('click', (e) => {
			menuMainBtn.closest('.dropdown').classList.toggle('_open');
		});
	});
}
burger()

/* ====================================
Меню каталога
==================================== */
const catalogMenu = () => {
	const btnCatalog = document.querySelector('.catalog-header__btn');
	const menuCatalog = document.querySelector('.catalog-header');

	btnCatalog.addEventListener('click', (e) => {
		menuCatalog.classList.toggle('_active');
	});
}
catalogMenu()


