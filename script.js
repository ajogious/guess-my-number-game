'use strict';
// html element
const input = document.querySelector('.input-value');
const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
const gameLeft = document.querySelector('#game-left');
const scores = document.querySelector('#score');
const highestScore = document.querySelector('#highest-score');

function messageAlert(msg, addColors, removeColors) {
  message.textContent = msg;
  message.classList.add(addColors);
  message.classList.remove(removeColors);
}

function gameLeftFunc(addColors, removeColors) {
  gameLeft.classList.add(addColors);
  gameLeft.classList.remove(removeColors);
}

function output() {
  let randomNum = Math.trunc(Math.random() * 20 + 1);
  let gameLife = 10;
  let score = 10;

  gameLeft.textContent = gameLife;
  scores.textContent = 0;
  highestScore.textContent = 0;
  messageAlert('Guess number from 1 to 20');

  btn.addEventListener('click', (e) => {
    let inputVal = Number(input.value);

    if (btn.value === 'Guess') {
      if (input.value === '' || input.value < 1 || input.value > 20) {
        messageAlert('Input a number from 1 to 20 only');
      } else if (inputVal === randomNum) {
        // if correct guess?
        messageAlert(`Correct guess: ${randomNum}`, 'success', 'warning');
        input.disabled = true;
        btn.value = 'Restart';

        scores.textContent = gameLeft.textContent;

        if (score > highestScore.textContent) {
          highestScore.textContent = score;
        }
      } else {
        inputVal > randomNum
          ? messageAlert('Guess to high', 'warning', 'success')
          : messageAlert('Guess to low', 'warning', 'success');
        gameLife--;
        score = gameLife;
        gameLeft.textContent = score;

        if (gameLife < 5) {
          gameLeftFunc('warning');
        }

        if (gameLife === 0) {
          messageAlert(`Game over. The number was ${randomNum}`, 'danger');
          gameLeftFunc('danger');
          input.disabled = true;
          btn.value = 'Restart';
        }
      }
    } else if (btn.value === 'Restart') {
      randomNum = Math.trunc(Math.random() * 20 + 1);
      gameLife = 10;
      score = 0;

      gameLeft.textContent = gameLife;
      scores.textContent = score;
      input.disabled = false;
      btn.value = 'Guess';
      score = gameLife;

      gameLeft.textContent = score;
      messageAlert('Guess number from 1 to 20', undefined, 'danger');
      message.classList.remove('success');
      message.classList.remove('warning');
      gameLeftFunc(undefined, 'danger');
      gameLeft.classList.remove('warning');
    }

    input.value = '';
    e.preventDefault();
  });
}
output();
