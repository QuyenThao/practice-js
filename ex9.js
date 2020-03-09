// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
const readlineSync = require('readline-sync');

function calculate() {
    let a =  readlineSync.question('a = ');
    let b =  readlineSync.question('b =  ');
    let mul = a * b;
    let div = a / b;
    console.log('multiplication of ' + a + ' and '+ b + ': ', mul);
    console.log('division of ' + a + ' and '+ b + ': ', div);
}

calculate();