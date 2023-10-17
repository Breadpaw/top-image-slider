import './style.css'
import Jas from './assets/jas.jpg'
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
sliderContainer.classList.add('slider')
mainContainer.body.appendChild(sliderContainer);

// Create slider array to hold images
const imageArray = [];

addSliderImage(Jas, imageArray);
addSliderImage(Bier, imageArray);
addSliderImage(Bb_shirt, imageArray);
addSliderImage(Shirt, imageArray);
addSliderImage(Cameo, imageArray);

function addSliderImage(importedImage, sliderImageArray){
    // Adds images to slider array
    const image = new Image();
    image.src = importedImage;
    sliderImageArray.push(importedImage);
}

// add counter to count position in images array
let imageArrayCounter = 0;

// create button to control the images
const nextBtn = document.createElement('button');
nextBtn.innerText = 'Next Image';
sliderContainer.appendChild(nextBtn);

nextBtn.onclick = () => {
    if(sliderContainer.childNodes.length > 1){
        sliderContainer.removeChild(sliderContainer.lastChild);
    }

    const image = new Image();
    image.src = imageArray[imageArrayCounter];
    sliderContainer.appendChild(image)

    //increment the imageArrayCounter
    imageArrayCounter += 1;

    if (imageArrayCounter === imageArray.length) {
        imageArrayCounter = 0;
    }
}