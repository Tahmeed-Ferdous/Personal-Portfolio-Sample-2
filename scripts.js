const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});


const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movielist = ['images/hero.mp4', 'images/hero-1.mp4', 'images/hero-2.mp4'];

let index = 0;
nextButton.addEventListener('click', function() {
  index +=1
  video.src = movielist[index];

  if (index === 2) {
    index = -1;
  }

})