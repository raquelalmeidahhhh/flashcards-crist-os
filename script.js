
// Quiz Data (Christian Questions)
const quizData = [
  {
    question: "Quem é o Filho de Deus na fé cristã?",
    options: ["Moisés", "Jesus", "Pedro", "Paulo"],
    answer: 1
  },
  {
    question: "Onde Jesus nasceu?",
    options: ["Jerusalém", "Belém", "Nazareth", "Cafarnaum"],
    answer: 1
  },
  {
    question: "Qual é o primeiro livro do Novo Testamento?",
    options: ["Atos dos Apóstolos", "Mateus", "Marcos", "Lucas"],
    answer: 1
  },
  {
    question: "Qual o nome do apóstolo que traiu Jesus?",
    options: ["Pedro", "Judas", "Tiago", "João"],
    answer: 1
  }
];

// Flashcard Data (Christian Terms)
const flashcards = [
  { term: "Boa nova, a mensagem de salvação através de Jesus Cristo." , definition:"Evangelho" },
  { term: "Comunidade dos seguidores de Cristo, o corpo de Cristo.", definition:"Igreja"  },
  { term: "Favor imerecido de Deus para com o homem, através de Jesus.", definition:"Graça"  },
  { term: "Favor imerecido de Deus para com o homem, através de Jesus.", definition:"Salvação" }

];

// Quiz Logic
let currentQuiz = 0;
const questionEl = document.getElementById("question");
const optionsEl = [
  document.getElementById("answer1"),
  document.getElementById("answer2"),
  document.getElementById("answer3"),
  document.getElementById("answer4")
];
const feedbackEl = document.getElementById("feedback");

function loadQuiz() {
  const quiz = quizData[currentQuiz];
  questionEl.textContent = quiz.question;
  optionsEl.forEach((btn, index) => {
    btn.textContent = quiz.options[index];
    btn.onclick = () => checkAnswer(index);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuiz].answer) {
    feedbackEl.textContent = "Correto!";
  } else {
    feedbackEl.textContent = "Errado!";
  }
  currentQuiz = (currentQuiz + 1) % quizData.length;
  setTimeout(() => {
    feedbackEl.textContent = "";
    loadQuiz();
  }, 1000);
}

loadQuiz();

// Flashcard Logic
let currentFlashcard = 0;
const termEl = document.getElementById("term");

function loadFlashcard() {
  termEl.textContent = flashcards[currentFlashcard].term;
}

document.getElementById("prev").onclick = () => {
  currentFlashcard =
    (currentFlashcard - 1 + flashcards.length) % flashcards.length;
  loadFlashcard();
};

document.getElementById("next").onclick = () => {
  currentFlashcard = (currentFlashcard + 1) % flashcards.length;
  loadFlashcard();
};

loadFlashcard();
