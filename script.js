"use strict";

// === elements ===
const hideQuestion = document.querySelector(".hide-question");
const message = document.querySelector(".message");
const inputNum = document.querySelector(".input-number");
const guessBtn = document.querySelector(".btn");
const gameLife = document.querySelector("#game-life");
let score = document.querySelector("#score");
const resetBtn = document.querySelector(".reset-btn");
const highestScore = document.querySelector("#highest-score");

// let gameLives = 10;
let scored = 10;
let highestScores = 0;

// == time out for message ===
const timeOut = () => {
  message.style.display = "";
  setTimeout(() => {
    message.style.display = "none";
  }, 1500);
};

// === button disabled func ===
const disabledFunc = () => {
  guessBtn.disabled = true;
  inputNum.disabled = true;
};

// === random number ===
let roundNum = Math.trunc(Math.random() * 20) + 1;
console.log(roundNum);
// === btn on click ===
guessBtn.addEventListener("click", function () {
  let val = Number(inputNum.value);
  // === if player input nothing ===
  if (!inputNum.value) {
    message.textContent = `Input a number from 1 to 20`;
    hideQuestion.textContent = "?";
    timeOut();
    // === if correct guess === //
  } else if (val === roundNum) {
    hideQuestion.textContent = roundNum;
    document.querySelector(".game-over").textContent = `Correct Guess`;
    document.querySelector(".container").style.backgroundColor = "#333";
    disabledFunc();
    if (scored > highestScores) {
      highestScores = scored;
      score.textContent = highestScores;
      highestScore.textContent = highestScores;
    } else {
      score.textContent = gameLife.textContent;
    }
  }

  // === if incorrect number inputed ===
  else if (inputNum.value !== hideQuestion.textContent) {
    message.textContent = `Incorrect Guess, try again`;
    message.style.color = "#e70f0f";
    hideQuestion.textContent = "?";
    scored--;
    gameLife.textContent = scored;
    timeOut();

    //   // === game over if score less than 1 ===
    if (gameLife.textContent < 1) {
      document.querySelector(".container").style.backgroundColor = "#f00";
      document.querySelector(
        ".game-over"
      ).textContent = `Game Over. The correct number was ${roundNum}`;
      disabledFunc();
    }
  }
});

// === reset button ===
resetBtn.addEventListener("click", () => {
  scored = 10;
  roundNum = Math.trunc(Math.random() * 20) + 1;
  console.log(roundNum);
  hideQuestion.textContent = "?";
  message.style.color = "";
  message.textContent = "";
  inputNum.value = "";
  gameLife.textContent = scored;
  document.querySelector(".game-over").textContent = "";
  document.querySelector(".container").style.backgroundColor = "#fff";
  guessBtn.disabled = false;
  inputNum.disabled = false;
});
