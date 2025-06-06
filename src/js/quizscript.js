const questions = [
  {
    question: "O que pode causar enchentes em áreas urbanas?",
    answers: [
      { text: "Acúmulo de lixo em bueiros", correct: true },
      { text: "Sol forte durante o dia", correct: false },
      { text: "Uso de máscara em locais públicos", correct: false },
      { text: "Plantar árvores nas calçadas", correct: false }
    ]
  },
  {
    question: "Qual é uma atitude que ajuda a prevenir enchentes?",
    answers: [
      { text: "Jogar lixo na rua", correct: false },
      { text: "Desmatar encostas", correct: false },
      { text: "Não jogar lixo nos bueiros", correct: true },
      { text: "Construir casas em áreas de risco", correct: false }
    ]
  },
  {
    question: "Durante uma enchente, o que NÃO se deve fazer?",
    answers: [
      { text: "Evitar contato com a água", correct: false },
      { text: "Atravessar ruas alagadas", correct: true },
      { text: "Procurar um local alto", correct: false },
      { text: "Desligar aparelhos elétricos", correct: false }
    ]
  },
  {
    question: "O que pode ser feito em casa para evitar alagamentos?",
    answers: [
      { text: "Manter calhas e ralos limpos", correct: true },
      { text: "Aumentar o uso de energia elétrica", correct: false },
      { text: "Deixar lixo acumulado no quintal", correct: false },
      { text: "Lavar a calçada com mangueira", correct: false }
    ]
  },
  {
    question: "O que é um bueiro?",
    answers: [
      { text: "Um tipo de árvore", correct: false },
      { text: "Abertura para escoamento de água", correct: true },
      { text: "Poste de energia", correct: false },
      { text: "Tubo de gás", correct: false }
    ]
  },
  {
    question: "Qual dessas ações agrava as enchentes?",
    answers: [
      { text: "Jogar óleo usado na pia", correct: true },
      { text: "Plantar jardins", correct: false },
      { text: "Usar sacolas reutilizáveis", correct: false },
      { text: "Separar o lixo reciclável", correct: false }
    ]
  },
  {
    question: "O que fazer ao ouvir alerta de enchente?",
    answers: [
      { text: "Ficar em casa em local seguro", correct: true },
      { text: "Ir ver a enchente de perto", correct: false },
      { text: "Ficar na rua", correct: false },
      { text: "Usar celular em local alagado", correct: false }
    ]
  },
  {
    question: "Qual órgão normalmente emite alertas de enchentes?",
    answers: [
      { text: "Defesa Civil", correct: true },
      { text: "Correios", correct: false },
      { text: "Posto de saúde", correct: false },
      { text: "Escola", correct: false }
    ]
  },
  {
    question: "Água de enchente pode transmitir doenças?",
    answers: [
      { text: "Sim", correct: true },
      { text: "Não", correct: false },
      { text: "Só se estiver gelada", correct: false },
      { text: "Apenas em cidades grandes", correct: false }
    ]
  },
  {
    question: "É seguro usar eletrônicos durante enchente?",
    answers: [
      { text: "Não", correct: true },
      { text: "Sim", correct: false },
      { text: "Apenas celulares", correct: false },
      { text: "Somente em locais úmidos", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Próxima";
  restartButton.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) score++;
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "#28a745"; // verde
    } else {
      button.style.backgroundColor = "#dc3545"; // vermelho
    }
  });
  nextButton.classList.remove("hidden");
}

function showScore() {
  resetState();
  questionElement.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
  restartButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", handleNextButton);
restartButton.addEventListener("click", startQuiz);

startQuiz();

//Hambúrguer

const btnHamburguer = document.getElementById('btnHamburguer');
const nav = document.querySelector('header nav');

btnHamburguer.addEventListener('click', () => {
  const aberto = nav.classList.toggle('menu-aberto'); 

  if (aberto) {
    btnHamburguer.innerHTML = '&times;'; // X
    btnHamburguer.setAttribute('aria-label', 'Fechar menu');
  } else {
    btnHamburguer.innerHTML = '&#9776;'; // hambúrguer
    btnHamburguer.setAttribute('aria-label', 'Abrir menu');
  }
});