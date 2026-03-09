const choices = ['rock','paper','scissors']
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const play_scoreDisplay = document.getElementById('play_scoreDisplay');
const comp_scoreDisplay = document.getElementById('comp_scoreDisplay');
let play_score = 0;
let comp_score = 0;


function playGame(play_choice){
    const comp_choice = choices[Math.floor(Math.random()*3)];
    let result = '';
    if(play_choice === comp_choice){
        result = "It's a Tie";
    }
    else{
        switch(play_choice){
            case 'rock':
                result = (comp_choice === "scissors") ?'YOU WIN':'YOU LOSE';
                break;
            case 'paper':
                result = (comp_choice === "rock") ?'YOU WIN':'YOU LOSE'; 
                break;
            case 'scissors':
                result = (comp_choice === "paper") ?'YOU WIN':'YOU LOSE'; 
                break;
        }

    }
    playerDisplay.textContent = `Your choice: ${play_choice}`;
    computerDisplay.textContent = `Computer's choice: ${comp_choice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenDisplay','redDisplay');

    switch(result){
        case 'YOU WIN':
            resultDisplay.classList.add('greenDisplay');
            play_score++;
            play_scoreDisplay.textContent = play_score;
            break;
        case 'YOU LOSE':
            resultDisplay.classList.add('redDisplay');
            comp_score++;
            comp_scoreDisplay.textContent = comp_score;
            break;
    }
}