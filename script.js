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

// === button enable func ===
const enableFunc = () => {
  guessBtn.disabled = false;
  inputNum.disabled = false;
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
    score.textContent = gameLife.textContent;

    // === if gamelife is greater than highest score is 
    if (gameLife.textContent >= highestScore.textContent) {
      highestScore.textContent = gameLife.textContent
    } else {
      highestScore.textContent = 10
    }
    message.textContent = `Correct Guess`;
    message.style.color = 'green';
    document.querySelector('.container').style.backgroundColor = '#333';
    disabledFunc()
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

// === reset button ===
resetBtn.addEventListener("click", () => {
  roundNum = Math.trunc(Math.random() * 20) + 1;
  console.log(roundNum);
  hideQuestion.textContent = '?';
  message.style.color = ''
  message.textContent = '';
  inputNum.value = '';
  gameLife.textContent = 10;
  document.querySelector('.game-over').textContent = '';
  document.querySelector('.container').style.backgroundColor = '#fff'
  enableFunc()
});
