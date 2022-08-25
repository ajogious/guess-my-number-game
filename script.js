"use strict";

// === elements ===
const hideQuestion = document.querySelector(".hide-question");
const message = document.querySelector(".message");
const inputNum = document.querySelector(".input-number");
const guessBtn = document.querySelector(".btn");
const gameLife = document.querySelector("#game-life");
const score = document.querySelector("#score");
const highestScore = document.querySelector("#highest-score");

// === random number ===
const roundNum = Math.trunc(Math.random() * 20) + 1;

let scores = 0;
// hideQuestion.textContent = roundNum;
console.log(roundNum);
guessBtn.addEventListener("click", () => {
  let guess = roundNum;
  if (inputNum.value === "") {
    message.textContent = `input a number`;
    message.classList.add("warning");
  } else if (inputNum.value === guess) {
    message.textContent = `correct`;
    message.classList.add("success");
  }
});
