// Rock Paper Scissors
const readlineSync = require('readline-sync');

function rockPaperScissors() {
    var value = Math.round(Math.random() * 3);
    if (value >= 0 && value <= 1) {
        return 'scissors';
    } else if (value > 1 && value <= 2) {
        return 'paper';
    } else {
        return 'rock';
    };
}



function play() {
    console.log('Game start.....');
    var player =  rockPaperScissors();
    var you =  readlineSync.question('Your option ( rock/paper/scissors ) : ');

    console.log('player : ', player);
    console.log('you : ', you);
    console.log('.................');
    if (player === 'scissors' && you === 'paper' ||
        player === 'rock' && you === 'scissors'||
        player === 'paper' && you === 'rock')
    {
        return 'You lose';
    } else if (you === 'scissors' && player === 'paper' ||
        you === 'rock' && player === 'scissors'||
        you === 'paper' && player === 'rock')
    {
        return 'You WIN';
    } else {
        return 'TIE!!!!!!!!!'
    }

}
console.log(play());
