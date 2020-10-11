svg4everybody()

class Sort {
	constructor(selector, list) {
		this.parentBlock = document.querySelector(selector)
		this.list = list
	}

	sortBy(sortType) {
		while (this.parentBlock.firstChild) {
			this.parentBlock.firstChild.remove()
		}

		this.list
			.sort((el1, el2) => {
				if (el2[sortType] > el1[sortType]) {
					return 1
				} else if (el2[sortType] < el1[sortType]) {
					return -1
				} else {
					return 0
				}
			})
			.forEach(el => render(el, this.parentBlock))
	}
}

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
	render(el, $catalogBlock)
})

document.querySelector('.sort__num').innerHTML = catalog.length

const sort = new Sort('.catalog', catalog)

const buttonSortPrice = document.querySelector('.sort__method_price')
const buttonSortType = document.querySelector('.sort__method_type')
const buttonSortRating = document.querySelector('.sort__method_rating')

buttonSortPrice.addEventListener('click', sort.sortBy.bind(sort, 'price'))
buttonSortType.addEventListener('click', sort.sortBy.bind(sort, 'type'))
buttonSortRating.addEventListener('click', sort.sortBy.bind(sort, 'rating'))

function render(el, block) {
	const starsCount = Math.floor(el.rating / 2)

	const $template = `
		<div class="catalog__item" data-type="${el.type}">
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

	block.insertAdjacentHTML('afterbegin', $template)
}