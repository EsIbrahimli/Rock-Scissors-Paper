const btns = document.querySelectorAll('.btn');
const resultText = document.querySelector('.result');
const compScoreEl = document.querySelector('#computer-score');
const yourScoreEl = document.querySelector('#your-score');
const yourChoiseEl = document.querySelector('#your-choise');
const compChoiseEl = document.querySelector('#computer-choise');
const resetBtn = document.querySelector('#reset-btn');

let compScore = 0;
let yourScore = 0;



function getComputerChoise() {
    const options = ['rock', 'paper', 'scissors'];
    let randomChoise= options[Math.floor(Math.random()*options.length)];
    return randomChoise;
}

function getWinner(user, computer) {
    if (user === computer) return `It is a draw!`;
    if(
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return `user`;
    } else {
        return `computer`;
    }
}  



function playGame(choise) {
    const computerChoise = getComputerChoise();
    yourChoiseEl.innerText = choise;
    compChoiseEl.innerText = computerChoise;

    const winner = getWinner(choise, computerChoise);
    if (winner === 'user') {
        yourScore++;
        resultText.innerHTML = 'You win!';
    } else if (winner === 'computer') {
        compScore++;
        resultText.innerHTML = 'Computer wins!';
    } else {
        resultText.innerHTML = 'It is a draw!';
    }

    yourScoreEl.innerHTML = yourScore;
    yourScoreEl.style.display = 'inline-block';
    compScoreEl.innerHTML = compScore;
    compScoreEl.style.display = 'inline-block';
}


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const choise = btn.dataset.choise;
        playGame(choise);
    });
});


resetBtn.addEventListener('click', () => {
   compScoreEl.innerText = 0;
    yourScoreEl.innerText = 0;
    yourChoiseEl.innerText = '';
    compChoiseEl.innerText = '';
    resultText.innerText = 'Your Result';
    compScore = 0;
    yourScore = 0;
});




