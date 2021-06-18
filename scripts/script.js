'use strict';
const computerScore = document.getElementById('Computer_score');
const UserScore = document.getElementById('User_score');
const gameStartContainer = document.getElementById('game_start');
const gameResultContainer = document.getElementById('game_result');
const btnGameStart = document.getElementById('btn_game_start')

let cScore = 0;
let pScore = 0;

//function 

//Game start func
const gameStart = function(){
    computerScore.innerText = cScore;
    UserScore.innerText = pScore;

    gameResultContainer.classList.remove('hidden')
    gameStartContainer.classList.add('hidden');
};

//Eventlisteners

btnGameStart.addEventListener('click',gameStart);



