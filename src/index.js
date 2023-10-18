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

// add interface buttons
addNextButton(buttonDiv);
addPreviousButton(buttonDiv);

// Show the first image
showImage()

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

        showImage();
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

		showImage();
	};
}

// Helper Functions

function addSliderImage(importedImage, sliderImageArray) {
	// Adds images to slider array
	const image = new Image();
	image.src = importedImage;
	sliderImageArray.push(importedImage);
}

function showImage() {
	if (sliderContainer.childNodes.length > 0) {
		sliderContainer.removeChild(sliderContainer.lastChild);
	}

	const image = new Image();
	image.src = imageArray[imageArrayCounter];
	sliderContainer.appendChild(image);

	console.log(imageArrayCounter);
}
