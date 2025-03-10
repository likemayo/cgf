/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0}
  slides[slideIndex].classList.add("active");
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}

window.onload = function() {
  slides[slideIndex].classList.add("active"); // Show the first slide
  setTimeout(showSlides, 2500);
};
