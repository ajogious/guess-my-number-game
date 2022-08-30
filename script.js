"use strict";

// === elements ===
const hideQuestion = document.querySelector(".hide-question");
const message = document.querySelector(".message");
const inputNum = document.querySelector(".input-number");
const guessBtn = document.querySelector(".btn");
const gameLife = document.querySelector("#game-life");
const score = document.querySelector("#score");
const resetBtn = document.querySelector(".reset-btn");
const highestScore = document.querySelector('#highest-score');

gameLife.textContent = 10;
// let highestScore;

// == time out for message ===
const timeOut = () => {
  message.style.display = ''
  setTimeout(() => {
    message.style.display = 'none'
  }, 1500)
}

// === button disabled func ===
const disabledFunc = () => {
  guessBtn.disabled = true;
  inputNum.disabled = true;
}

// === random number ===
let roundNum = Math.trunc(Math.random() * 20) + 1;
console.log(roundNum);

// === btn on click ===
guessBtn.addEventListener('click', function() {
  hideQuestion.textContent = roundNum;
  message.style.display = ''

  // === player wins ===
  if (inputNum.value === hideQuestion.textContent) {
    hideQuestion.textContent = roundNum;
    message.style.color = '#09e209'
    message.textContent = `Correct Guess`;
    document.querySelector('.container').style.backgroundColor = '#333'
    disabledFunc();
    localStorage.setItem("score", gameLife.textContent);
    localStorage.getItem('score');
    highestScore.textContent = localStorage.getItem('score');
    score.textContent = localStorage.getItem("score");
    if (score.textContent > gameLife.textContent) {
      highestScore.textContent = score.textContent
    }
  } 
  // === if player input nothing ===
  else if (inputNum.value === '') {
    message.textContent = `Input a number from 1 to 20`;
    hideQuestion.textContent = '?';
    timeOut()
  } 
  
  // === if incorrect number inputed ===
  else if (inputNum.value !== hideQuestion.textContent) {
    message.textContent = `Incorrect Guess, try again`;
    message.style.color = '#e70f0f'
    hideQuestion.textContent = '?'
    gameLife.textContent--;
    timeOut()

    // === game over if score less than 1 ===
    if (gameLife.textContent < 1) {
      document.querySelector('.container').style.backgroundColor = '#f00'
      document.querySelector('.game-over').textContent = `Game Over. The correct number was ${roundNum}`;
      disabledFunc()
    }
  } 
})

//== local storage ===
score.textContent = localStorage.getItem("score");

// === reset button ===
resetBtn.addEventListener("click", () => {
  window.location.reload();
});
