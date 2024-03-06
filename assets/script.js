const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrows = document.querySelectorAll('.arrow')
const dots = document.querySelector('.dots')
const img = document.querySelector('.banner-img')
const txt = document.querySelector('#banner p')

let currentSlide = 0

const updateSlide = (index) => {
	const slide = slides[index]
	img.src = `./assets/images/slideshow/${slide.image}`
	txt.innerHTML = slide.tagLine 

	const alldots = document.querySelectorAll('.dot')
	alldots.forEach((dot, i) => {
		dot.classList.remove('dot_selected')
		if (i === index) {
			dot.classList.add('dot_selected')
		}
	})
}

function changeSlide(direction) {
	
   if (direction === 'left') {
		currentSlide = currentSlide + -1
   }else{
		currentSlide = currentSlide + +1
   }
	
    updateSlide(currentSlide)
}

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span')
    dot.classList.add('dot')
	if (i === 0) {
		dot.classList.add('dot_selected')
	}
    dots.appendChild(dot)
}

arrows.forEach(arrow => {
	arrow.addEventListener('click', () => {
		if (arrow.classList[1] === 'arrow_left') {
			changeSlide('left')	
		} else {
			changeSlide('right')		
		}
	})
})