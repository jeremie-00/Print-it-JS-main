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
			console.log('left')		
		} else {
			console.log('right')		
		}
	})
})