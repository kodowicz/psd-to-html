/* navigation */
const navigation = document.querySelector('.navigation');
let lastScrollY = 0;

window.addEventListener('scroll', function(event) {
  const documentScroll = document.body.getBoundingClientRect().y;
  const navHeight = navigation.clientHeight;

  if (documentScroll > -10) {
    navigation.classList.remove('navigation--opened');
  } else if ((documentScroll < -10) && (-documentScroll > 100)) {
    navigation.classList.add('navigation--opened');
  }

  if (lastScrollY > documentScroll) {
    navigation.style.position = 'fixed';
    navigation.style.transform = `translateY(-${navHeight}px)`;
  } else {
    navigation.style.position = 'fixed';
    navigation.style.transform = 'translateY(0px)';
  }

  lastScrollY = documentScroll;
});

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


/* playing video */

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


/* load more images */
const loadMoreButton = document.querySelector('.works__button');

loadMoreButton.addEventListener('click', function () {
  const wrapper = document.querySelector('.works__projects');
  const projects = wrapper.querySelectorAll('.works__project--hidden');

  wrapper.classList.add('works__projects--expanded');
  loadMoreButton.classList.add('works__button--expanded');
  projects.forEach(function(project) {
    project.classList.remove('works__project--hidden');
  })

});
