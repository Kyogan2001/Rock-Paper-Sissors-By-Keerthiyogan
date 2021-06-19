'use strict';
const computerScore = document.getElementById('Computer_score');
const UserScore = document.getElementById('User_score');
const gameStartContainer = document.getElementById('game_start');
const gameResultContainer = document.getElementById('game_result');

let cScore = 0;
let pScore = 0;
let result = '';

const btnGameStart = document.getElementById('btn_game_start')
const handsHd = document.querySelector('.hands');
const userChoice = document.getElementById('User_choice');
const computerChoice = document.getElementById('Computer_choice');
const resultFinal = document.getElementById('result');




//function 

//Game start func

const gameStart = function(){
    computerScore.innerText = cScore;
    UserScore.innerText = pScore;

    gameResultContainer.classList.remove('hidden');
    gameStartContainer.classList.add('hidden');
    handsHd.classList.remove('hidden');

};


//update DOM func
const updateDom = function(userSelected,computerSelected) {
    computerScore.innerText = cScore;
    UserScore.innerText = pScore;


    computerChoice.innerHTML=`Computer choose <strong>${computerSelected.toUpperCase()}</strong>`;
    userChoice.innerHTML=`You choose <strong>${userSelected.toUpperCase()}</strong>`;
    resultFinal.innerText=`${result.toUpperCase()}`;
}


const check_e = function(input){
    const userSelected = input;
    const choices = ['rock','paper','scissors'];
    const num = Math.trunc(Math.random()*3);
    const computerSelected = choices[num];

    //call gamelogic func
    game_logic(userSelected,computerSelected);
};

//Eventlisteners
btnGameStart.addEventListener('click',gameStart);

const game_logic = function(userSelected,computerSelected){
    if(userSelected==computerSelected){
        result = 'draw';
        updateDom(userSelected,computerSelected,result);
        return;
    }

    if(userSelected==='rock'){
        if(computerSelected==='paper'){
            cScore++;
            result = 'you loose';
            updateDom(userSelected,computerSelected,result);
            return;
        }
        else{
            pScore++;
            result = 'you win';
            updateDom(userSelected,computerSelected,result);
            return;
        }
    }

    if(userSelected==='paper'){
        if(computerSelected==='scissors'){
            cScore++;
            result = 'you loose';
            updateDom(userSelected,computerSelected,result);
            return;
        }
        else{
            pScore++;
            result = 'you win';
            updateDom(userSelected,computerSelected,result);
            return;
        }
    }

    if(userSelected==='scissors'){
        if(computerSelected==='rock'){
            cScore++;
            result = 'you loose';
            updateDom(userSelected,computerSelected,result);
            return;
        }
        else{
            pScore++;
            result = 'you win';
            updateDom(userSelected,computerSelected,result);
            return;
        }
    }
};




