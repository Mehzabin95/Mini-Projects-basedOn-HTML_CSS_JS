const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const ans = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAns = +inputEl.value;

  if (userAns == ans) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

scoreEl.innerText = `Score: ${score}`;
