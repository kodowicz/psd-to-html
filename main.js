/*   slider animation   */
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


/*========== playing video ==========*/

const videoButton = document.querySelector('.video-button__button');
const video = document.querySelector('.promoting-video');
const videoButtonContainer = document.querySelector('.video-button');

videoButton.addEventListener('click', function () {
  video.classList.add('promoting-video--video-played');
  videoButtonContainer.classList.add('video-button--video-played');
  video.play();
})

video.addEventListener('click', function () {
  video.pause();
  videoButtonContainer.classList.remove('video-button--video-played');
})
// if video ends playing
video.addEventListener('ended', function () {
  videoButtonContainer.style.display = '';
})
