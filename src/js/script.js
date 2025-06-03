// Slideshow 
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextSlide');
let autoSlideInterval;

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function proximoSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  mostrarSlide(slideIndex);
}

window.addEventListener('load', () => {
  mostrarSlide(slideIndex);
  autoSlideInterval = setInterval(proximoSlide, 2500); // troca de slide
});

nextBtn.addEventListener('click', () => {
  proximoSlide(); // troca manual
  clearInterval(autoSlideInterval); // reseta autoplay
  autoSlideInterval = setInterval(proximoSlide, 4000); // reinicia autoplay
});

// Menu Hambúrguer  
const btnHamburguer = document.getElementById('btnHamburguer');
const nav = document.querySelector('header nav');

btnHamburguer.addEventListener('click', () => {
  nav.classList.toggle('menu-aberto');
});
