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
sliderContainer.classList.add('slider');
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
renderCircles(buttonDiv);
addPreviousButton(buttonDiv);

// Show the first image
showImage(imageArrayCounter)

function addNextButton(container) {
	// create "next"-button to control the images
	const nextBtn = document.createElement('button');
	nextBtn.innerText = 'Next Image';
	container.appendChild(nextBtn);

	nextBtn.onclick = () => {
		//increment the imageArrayCounter
		imageArrayCounter += 1;

		if (imageArrayCounter === imageArray.length) {
			imageArrayCounter = 0;
		}

        showImage(imageArrayCounter);
	};
}

function addPreviousButton(container) {
	// create "previous"-button to control the images
	const prevBtn = document.createElement('button');
	prevBtn.innerText = 'Previous Image';
	container.appendChild(prevBtn);

	prevBtn.onclick = () => {
		imageArrayCounter -= 1;
		if (imageArrayCounter < 0) {
			imageArrayCounter = imageArray.length - 1;
		}

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
	console.log(`showing image number ${activeImageNumber}`)

	if (sliderContainer.childNodes.length > 0) {
		sliderContainer.removeChild(sliderContainer.lastChild);
	}

	const image = new Image();
	image.src = imageArray[activeImageNumber];
	sliderContainer.appendChild(image);
}

function renderCircles(container, activeImageNumber){

	// add empty circles to navigate slider
	const array = ["○","○","○","○","○"];

	// replace the active slider element with a solid circle

	// render circles container in html
	const circleContainer = document.createElement('div');
	circleContainer.classList.add('circleContainer');
	container.appendChild(circleContainer)
	
	// render circles and add event listeners
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		
		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.innerText = element;
		circle.addEventListener('click', () => showImage(i));
		circleContainer.appendChild(circle);
	}
}