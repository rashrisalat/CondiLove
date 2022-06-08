
const leftBtn = document.querySelector('.slider__button_left');
const rightBtn = document.querySelector('.slider__button_right');
const sliderImage1 = document.querySelector('.slider__images1');

leftBtn.addEventListener('click',onLeftBtnClick);
rightBtn.addEventListener('click',onRightBtnClick);

let arreySlider =['images/image1.svg', 'images/sliderImage4.svg','images/sliderImage3.svg'];

let currentImagesIndex = 0;

sliderImage1.src = arreySlider[currentImagesIndex];

function onLeftBtnClick() {
	currentImagesIndex--;
	if (currentImagesIndex ===0 ) {
	leftBtn.disabled = true;
	}
	sliderImage1.src = arreySlider[currentImagesIndex];
	leftBtn.disabled = folse;
}

function onRightBtnClick() {
	currentImagesIndex++;
	if (currentImagesIndex === (arreySlider.length - 1)){
	rightBtn.disabled = true;
	};
	sliderImage1.src = arreySlider[currentImagesIndex];
	rightBtn.disabled = folse;
}
