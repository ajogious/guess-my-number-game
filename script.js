"use strict";

// === elements ===
const hideQuestion = document.querySelector(".hide-question");
const message = document.querySelector(".message");
const inputNum = document.querySelector(".input-number");
const guessBtn = document.querySelector(".btn");
const gameLife = document.querySelector("#game-life");
const score = document.querySelector("#score");
// const highestScore = document.querySelector("#highest-score");
const resetBtn = document.querySelector(".reset-btn");
// === random number ===
let roundNum = Math.trunc(Math.random() * 20) + 1;

let scores = 0;
console.log(roundNum);
guessBtn.addEventListener("click", () => {
  hideQuestion.textContent = roundNum;
  if (inputNum.value === "") {
    message.textContent = `input a number`;
    hideQuestion.textContent = "?";
    message.classList.add("warning");
  } else if (hideQuestion.textContent === inputNum.value) {
    message.textContent = `correct`;
    message.classList.add("success");
    hideQuestion.textContent = roundNum;

    guessBtn.disabled = true;
    inputNum.disabled = true;
    localStorage.setItem("score", gameLife.textContent);

    // let store = JSON.parse(localStorage.getItem("score"));
    score.textContent = localStorage.getItem("score");
    // console.log(store);
  } else if (hideQuestion.textContent !== inputNum.value) {
    hideQuestion.textContent = "?";
    message.textContent = `not the correct guess, try again`;
    message.classList.add("danger");
    gameLife.textContent--;
    if (gameLife.textContent < 1) {
      message.textContent = `game over. the correct answer was ${roundNum}`;
      guessBtn.disabled = true;
      inputNum.disabled = true;
      document.querySelector(".container").style.backgroundColor = "red";
    }
  }
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
score.textContent = localStorage.getItem("score");
