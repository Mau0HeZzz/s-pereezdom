/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.hero-home__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.hero-home__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.hero-home__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.hero-home__arrow_prev',
				nextEl: '.hero-home__arrow_next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.reviews-home__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews-home__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.reviews-home__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.hero-home__arrow_prev',
			// 	nextEl: '.hero-home__arrow_next',
			// },

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 1.5,
					spaceBetween: 60,
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.reklama-services__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reklama-services__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.reklama-services__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.hero-home__arrow_prev',
			// 	nextEl: '.hero-home__arrow_next',
			// },

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.employees-about__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.employees-about__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 76,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.employees-about__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.hero-home__arrow_prev',
			// 	nextEl: '.hero-home__arrow_next',
			// },

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
          centeredSlides: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
          centeredSlides: false,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
				1290: {
					slidesPerView: 4,
					spaceBetween: 76,
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.services-home_about .services-home__body')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.services-home_about .services-home__body', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 50,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.services-home_about .services-home__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.hero-home__arrow_prev',
			// 	nextEl: '.hero-home__arrow_next',
			// },

			// Брейкпоинты
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 10,
      //     centeredSlides: true,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 30,
      //     centeredSlides: false,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 60,
			// 	},
			// 	1290: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 76,
			// 	},
			// },
			// События
			on: {

			}
		});
	}

	const reviewsSliders =document.querySelectorAll('[data-review-slider]');
	if (reviewsSliders.length) {
		reviewsSliders.forEach(reviewsSlider=>{
			let centeredSlides = reviewsSlider.dataset.centeredSlides === '1' ? true : false;
			new Swiper(reviewsSlider, { // Указываем скласс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Pagination],
				observer: true,
				observeParents: true,
				slidesPerView: 2.3,
				spaceBetween: 45,
				speed: 800,
				centeredSlides: centeredSlides,
				//touchRatio: 0,
				//simulateTouch: false,
				loop: false,
				//preloadImages: false,
				//lazy: true,
				/*
				// Эффекты
				effect: 'fade',
				*/
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},

				// Скроллбар
				/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

				// Кнопки "влево/вправо"
				// navigation: {
				// 	prevEl: '.hero-home__arrow_prev',
				// 	nextEl: '.hero-home__arrow_next',
				// },

				// Брейкпоинты
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 60,
					},
					1290: {
						slidesPerView: 4,
						spaceBetween: 76,
					},
				},
				// События
				on: {

				}
			});
			
		})
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});