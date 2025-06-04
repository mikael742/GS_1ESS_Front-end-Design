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

/*
const btnHamburguer = document.getElementById('btnHamburguer');
const nav = document.querySelector('header nav');

btnHamburguer.addEventListener('click', () => {
  const aberto = nav.classList.toggle('menu-aberto'); // adiciona/remove a classe e retorna se está aberto

  if (aberto) {
    btnHamburguer.innerHTML = '&times;'; // mostra X
    btnHamburguer.setAttribute('aria-label', 'Fechar menu');
  } else {
    btnHamburguer.innerHTML = '&#9776;'; // mostra hambúrguer
    btnHamburguer.setAttribute('aria-label', 'Abrir menu');
  }
});

  function toggleMenu() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('hamburguer');
    const isOpen = menu.classList.toggle('menu-aberto');

    // Troca o ícone
    button.textContent = isOpen ? '✖' : '☰';
  }
*/
const btnHamburguer = document.getElementById('btnHamburguer');
const nav = document.querySelector('header nav');

btnHamburguer.addEventListener('click', () => {
  const aberto = nav.classList.toggle('menu-aberto'); // adiciona/remove a classe e retorna se está aberto

  if (aberto) {
    btnHamburguer.innerHTML = '&times;'; // mostra X
    btnHamburguer.setAttribute('aria-label', 'Fechar menu');
  } else {
    btnHamburguer.innerHTML = '&#9776;'; // mostra hambúrguer
    btnHamburguer.setAttribute('aria-label', 'Abrir menu');
  }
});

// Troca de cor de fundo
document.addEventListener('DOMContentLoaded', () => {
  const botoesDeCor = document.querySelectorAll('.cor-btn');

  botoesDeCor.forEach(botao => {
    botao.addEventListener('click', () => {
      const corEscolhida = botao.getAttribute('data-cor');
      document.body.style.backgroundColor = corEscolhida;
    });
  });
});

// Formulário: 

document.getElementById("formulario-contato").addEventListener("submit", function (e) {
  e.preventDefault(); // evita envio automático
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let mensagem = document.getElementById("mensagem");

  let erroNome = document.getElementById("erro-nome");
  let erroEmail = document.getElementById("erro-email");
  let erroMensagem = document.getElementById("erro-mensagem");

  let valido = true;

  // Validação Nome
  if (nome.value.trim() === "") {
    erroNome.classList.add("ativo");
    valido = false;
  } else {
    erroNome.classList.remove("ativo");
  }

  // Validação Email
  if (email.value.trim() === "" || !email.value.includes("@")) {
    erroEmail.classList.add("ativo");
    valido = false;
  } else {
    erroEmail.classList.remove("ativo");
  }

  // Validação Mensagem
  if (mensagem.value.trim() === "") {
    erroMensagem.classList.add("ativo");
    valido = false;
  } else {
    erroMensagem.classList.remove("ativo");
  }

  // Se tudo estiver válido
  if (valido) {
    alert("Mensagem enviada com sucesso!");
    this.reset();
  }
});

