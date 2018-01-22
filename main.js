/* slider animation */
let currentSlide = 0;

function changeSlide () {
  const slides = document.querySelectorAll('.slider-item');
  const slidePosition = document.querySelectorAll('.position-item');
  slides[currentSlide].className = 'slider-item';
  slidePosition[currentSlide].className = 'position-item';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slider-item slider-item--enabled';
  slidePosition[currentSlide].className = 'position-item position-item--current';
}

setInterval(changeSlide, 3000);
