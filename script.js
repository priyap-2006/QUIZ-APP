const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      "HTML",
      "CSS",
      "Python",
      "Java"
    ],
    correct: 1
  },
  {
    question: "Which language is used to make web pages interactive?",
    answers: [
      "CSS",
      "JavaScript",
      "HTML",
      "SQL"
    ],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const nextButton = document.getElementById("next");

function loadQuestion() {
  const q = questions[currentQuestion];
  question.textContent = q.question;

  answerButtons.forEach((button, index) => {
    button.textContent = q.answers[index];
    button.onclick = () => {
      if (index === q.correct) {
        score++;
      }
      nextButton.disabled = false;
    };
  });

  nextButton.disabled = true;
}

nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML =
      `<h2>Quiz Finished!</h2>
       <p>Your Score: ${score} / ${questions.length}</p>`;
  }
});

loadQuestion();
