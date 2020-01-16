/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);


//document.querySelector('#current-' + activePlayer).innerHTML = "<em>" + dice + "</em>";

//qS uses as a style changer


//All the values are 0



//Start - click the roll dice to shuffle the dice

document.querySelector('.btn-roll').addEventListener('click', function(){
    //1.get a random number
    if(gamePlaying){
        //var dice;
        dice = Math.floor(Math.random() * 6) + 1;

        //2.select the suitabale dice picture
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        //3. update the roundscore and if roundscore = 1 then change the player

        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
    }
    

    
    



})

//If we press the hold button simply shows the value of the in UI

//1. print the value when press the hold

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
         //store the current active player's score
        scores[activePlayer] = scores[activePlayer] + roundScore; //scores array stores the current value and roundscore adds to it
    
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
    
        //scores assign to the possition
        nextPlayer();

        //check is the player won the game
        if(scores[activePlayer] >=10){
            document.getElementById('name-' + activePlayer).textContent = 'Winner..!!';
        
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('player' + activePlayer + 'panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //NextPlayer
            nextPlayer();
        }

    }
   
    




})

document.querySelector('.btn-new').addEventListener('click', init);
    


function nextPlayer(){
    //Next player
    if(activePlayer === 0){
         activePlayer = 1;
    }else{
        activePlayer = 0;
    

    }
    //after the every dice == 1, roundscore should be 0
    roundScore = 0;


    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    //toggle : a key or command that is operated the same way but with opposite effect on successive occasions.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Hide the dice to next player start
    document.querySelector('.dice').style.display = 'none';
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //remove the winner status when click the new game
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}








