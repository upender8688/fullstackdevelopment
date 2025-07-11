// const questions=[
//   {q:"who is the Cheif Minister of Telangana?",
// options:["kcr","ktr", "revanthreddy" ,"kvr"],
//     answer:"revanthreddy.",
//   },
//   {
//     q:"who is the hero of Billa movie?",
//     options:["maheshbabu","prabhas","nani","ntr"],
//     answer:"prabhas",
//   }
// ];
// let current=0,score=0;
// let timer;

  
const questions = [
  {
    q: "What is the CM of Telangana?",
    options: ["KCR", "REVANTH REDDY", "KTR", "KVR"],
    answer: "REVANTH REDDY"
  },
  {
    q: "What is 2 + 2?",
    options: ["3", "4", "22", "5"],
    answer: "4"
  },
  {
    q:"what is 10+30?",
    options:["24","46","34","40"],
    answer:"40"
  }
   
];

let current = 0, score = 0;
let timer;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerFill = document.getElementById("timer-fill");
const resultModal = document.getElementById("result-modal");
const scoreDisplay = document.getElementById("score-display");
const starsEl = document.getElementById("stars");
const leaderboardEl = document.getElementById("leaderboard");

function loadQuestion() {
  if (current >= questions.length) return showResult();

  const q = questions[current];
  questionEl.textContent = `Q${current + 1}: ${q.q}`;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "opt";
    input.value = opt;
    const span = document.createElement("span");
    span.textContent = opt;
    label.append(input, span);
    optionsEl.appendChild(label);
  });

  startTimer();
}

function startTimer() {
  let duration = 10;
  timerFill.style.transform = `scaleX(1)`;

  clearInterval(timer);
  timer = setInterval(() => {
    duration--;
    timerFill.style.transform = `scaleX(${duration / 10})`;

    if (duration <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);

function nextQuestion() {
  clearInterval(timer);
  const selected = document.querySelector("input[name='opt']:checked");
  if (selected && selected.value === questions[current].answer) {
    score++;
  }
  current++;
  loadQuestion();
}

function showResult() {
  resultModal.classList.remove("hidden");
  const percent = Math.round((score / questions.length) * 100);
  scoreDisplay.innerHTML = `You scored ${score}/${questions.length} (${percent}%)`;

  
  let stars = Math.round(score / (questions.length / 5));
  starsEl.innerHTML = "★".repeat(stars) + "☆".repeat(5 - stars);

 
  let topScores = JSON.parse(localStorage.getItem("quizScores") || "[]");
  topScores.push(score);
  topScores.sort((a, b) => b - a);
  topScores = topScores.slice(0, 5);
  localStorage.setItem("quizScores", JSON.stringify(topScores));
  leaderboardEl.innerHTML = topScores.map(s => `<li>${s}</li>`).join("");
}

loadQuestion();






