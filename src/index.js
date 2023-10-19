import './style.css';
import Jas from './assets/jas.jpg';
import Bier from './assets/moersleutel.png';
import Bb_shirt from './assets/bb_shirt.jpg';
import Shirt from './assets/shirt.jpg';
import Cameo from './assets/cameo.png';

// create main container
const mainContainer = document.createElement('div');
mainContainer.classList.add('main');
document.body.appendChild(mainContainer);

// create image container
const sliderContainer = document.createElement('div');
sliderContainer.classList.add('imageContainer');
mainContainer.appendChild(sliderContainer);

// create div for buttons
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('buttons');
document.body.appendChild(buttonDiv);

// Create slider array to hold images
const imageArray = [];

// add counter to count position in images array
let imageArrayCounter = 0;

// Add images to image slider array
addSliderImage(Jas, imageArray);
addSliderImage(Bier, imageArray);
addSliderImage(Bb_shirt, imageArray);
addSliderImage(Shirt, imageArray);
addSliderImage(Cameo, imageArray);

// add controls (buttons and circles)
addNextButton(buttonDiv);
addCirclesContainer(buttonDiv);
addPreviousButton(buttonDiv);

// Show the first image
showImage(imageArrayCounter);

function addNextButton(container) {
	// create "next"-button to control the images
	const nextBtn = document.createElement('button');
	nextBtn.innerText = 'Next Image';
	container.appendChild(nextBtn);

	nextBtn.onclick = () => {
		increaseCounter();
		showImage(imageArrayCounter);
	};
}

function addPreviousButton(container) {
	// create "previous"-button to control the images
	const prevBtn = document.createElement('button');
	prevBtn.innerText = 'Previous Image';
	container.appendChild(prevBtn);

	prevBtn.onclick = () => {
		decreaseCounter();
		showImage(imageArrayCounter);
	};
}

// Correlate shown image with circle from Array and replace with solid circle

// Helper Functions

function addSliderImage(importedImage, sliderImageArray) {
	// Adds images to slider array
	const image = new Image();
	image.src = importedImage;
	sliderImageArray.push(importedImage);
}

function showImage(activeImageNumber) {

	unloadImage();
	// Set timeout to allow for the fade-out to show
	setTimeout(()=>loadImage(), 1000);

	// render the circles for current state, which changes every showing of images
	renderCircles(activeImageNumber);

	function unloadImage() {
		const imageContainer = document.querySelector('div.imageContainer');
		// check if any image shown. If so, fade it out
		if (imageContainer.hasChildNodes()) {
			// code to select shown image
			const currentImage = sliderContainer.lastChild;
			// add css to fade the element out
			fadeOut(currentImage);
			// TODO make setTimeout with currentImage.style.animationPlayState or something
		}
	}

	function loadImage() {
		if (sliderContainer.childNodes.length > 0) {
			sliderContainer.removeChild(sliderContainer.lastChild);
		}

		const image = new Image();
		image.src = imageArray[activeImageNumber];
		// set opacity at 0 to fade in the new image
		image.style.opacity = 0;
		sliderContainer.appendChild(image);
		fadeIn(image)
	}
}

function addCirclesContainer(container) {
	const circleContainer = document.createElement('div');
	circleContainer.classList.add('circleContainer');
	container.appendChild(circleContainer);
}

function renderCircles(activeImageNumber) {
	// get the element to contain circles
	const circleContainer = document.querySelector('div.circleContainer');

	// Clear the circles if there are any
	while (circleContainer.hasChildNodes()) {
		circleContainer.removeChild(circleContainer.lastChild);
	}

	// add empty circles to navigate slider
	const array = Array(5).fill('○');

	// replace the active slider element with a solid circle
	const solidCircle = '●';
	array[activeImageNumber] = solidCircle;

	// render circles and add event listeners
	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.innerText = element;
		circle.addEventListener('click', () => {
			setCounter(i);
			showImage(i);
			renderCircles(i);
		});
		circleContainer.appendChild(circle);
	}
}

function increaseCounter() {
	imageArrayCounter += 1;

	if (imageArrayCounter === imageArray.length) {
		imageArrayCounter = 0;
	}
}

function decreaseCounter() {
	imageArrayCounter -= 1;
	if (imageArrayCounter < 0) {
		imageArrayCounter = imageArray.length - 1;
	}
}

function setCounter(number) {
	imageArrayCounter = number;
}

// visual effect functions
function fadeIn(element) {
	element.classList.add('fadeIn');
}

function fadeOut(element) {
	element.classList.add('fadeOut');
}
