let score = JSON.parse(localStorage.getItem('score'));

if(score === null){
  score = {
    wins : 0,
    losses : 0,
    ties : 0
  }
}

updateScoreElement();

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissor');
  }
});

function playGame(playerMove){

  let result = '';
  const computerMove = pickComputerMove();

if(playerMove === 'rock'){
  if(computerMove === 'rock'){
      result = 'Tie!';
    }else if (computerMove === 'Paper'){
      result = 'You lose!';
    }else if(computerMove === 'Scissor'){
      result = 'You win!';
    }
}else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
        result = 'You win!';
      }else if (computerMove === 'Paper'){
        result = 'Tie!';
      }else if(computerMove === 'Scissor'){
        result = 'You lose!';
      }
  }else if(playerMove === 'scissor'){
    if(computerMove === 'rock'){
        result = 'You lose!';
      }else if (computerMove === 'Paper'){
        result = 'You win!';
      }else if(computerMove === 'Scissor'){
        result = 'Tie!';
      }
  }

  if(result === 'You win!'){
    score.wins += 1;
  }else if(result === 'You lose!'){
    score.losses += 1;
  }else if(result === 'Tie!'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = `You picked <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;

}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `;
}


function pickComputerMove(){
  const randomNum = Math.random();
  let computerMove = '';

  if(randomNum >= 0 && randomNum < 1/3)
  {
    computerMove = 'rock';
  }else if(randomNum >= 1/3 && randomNum < 2/3)
  {
    computerMove = 'Paper';
  }else if(randomNum >= 2/3 && randomNum < 1) 
  {
    computerMove = 'Scissor';
  }
  return computerMove;
}

