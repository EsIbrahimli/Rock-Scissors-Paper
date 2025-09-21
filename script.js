const btns = document.querySelectorAll('.btn');
const resultText = document.getElementsByClassName('result');
const compScoreEl = document.getElementById('computer-score');
const yourScoreEl = document.getElementById('your-score');
const yourChoiseEl = document.getElementById('your-choise');
const compChoiseEl = document.getElementById('computer-choise');
const resetBtn = document.getElementById('reset-btn');

let compScore = 0;
let yourScore = 0;
const options = ['rock', 'paper', 'scissors'];

function getComputerChoise() {
    let randomChoise= options[Math.floor(Math.random()*options.length)];
    return randomChoise;
}


