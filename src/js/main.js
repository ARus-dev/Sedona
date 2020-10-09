svg4everybody()

const pathImg = '/img/catalog/'

const catalog = [
	{
		name: 'Amara Resort & Spa',
		price: 4000,
		img: pathImg + 'amara-resort.jpg',
		type: 'Гостиница',
		rating: '8.5',
		is: ['pool', 'wifi']
	},
	{
		name: 'Desert Quail Inn',
		price: 3000,
		img: pathImg + 'desert-quail.jpg',
		type: 'Мотель',
		rating: '8.9',
		is: ['pool', 'wifi', 'parking']
	},
	{
		name: 'Villas at Poco Diablo',
		price: 2000,
		img: pathImg + 'villas-at-poco-diablo.jpg',
		type: 'Апартаменты',
		rating: '9.2',
		is: ['wifi']
	}
]

const $catalogBlock = document.querySelector('.catalog')
const starWidth = 19

catalog.forEach(el => {
	const starsCount = Math.floor(el.rating / 2)
	const $item = `
		<div class="catalog__item">
			<div class="catalog__img">
				<img src="${el.img}">
			</div>
			<div class="catalog__block">
				<div class="catalog__info">
					<h3 class="catalog__title">${el.name}</h3>
					<div class="catalog__text">
						<p>${el.type}</p>
						<p>ОТ ${el.price} Р</p>
					</div>
					<div class="catalog__buttons">
						<button class="catalog__btn">Подробнее</button>
						<button class="catalog__btn catalog__btn_brown">Забронировать</button>
					</div>
				</div>
				<div class="catalog__rating">
					<div class="catalog__stars" style="width: ${starWidth * starsCount}px"></div>
					<p>РЕЙТИНГ: ${el.rating}</p>
				</div>
			</div>
		</div>
	`

	$catalogBlock.insertAdjacentHTML('afterbegin', $item)
})