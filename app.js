/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);


//document.querySelector('#current-' + activePlayer).innerHTML = "<em>" + dice + "</em>";

//qS uses as a style changer
document.querySelector('.dice').style.display = 'none';

//All the values are 0
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('score-1').textContent = '0';



//Start - click the roll dice to shuffle the dice

document.querySelector('.btn-roll').addEventListener('click', function(){
    //1.get a random number

    var dice;
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
        if(activePlayer == 0){
            activePlayer = 1;
        }else{
            activePlayer == 0;
        }
        roundScore = 0;
    }

    




})



