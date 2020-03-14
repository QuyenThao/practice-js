// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. 
// If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 
const readlineSync = require('readline-sync');

function guess() {
    let random = Math.round(Math.random() * 10);
    var you =  readlineSync.question('Your guess (1 - 10) : ');
    console.log('computer : ', random);
    console.log('you : ', you);
    if (random == you) {
        console.log('Good Work');
    } else {
        console.log('Not matched');
    }
}
guess();