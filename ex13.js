// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
const readlineSync = require('readline-sync');

function primeNum() {
    console.log('Array of all prime numbers between 1 and n ');
    let n =  readlineSync.question('n = ');
    let arr = [];
    let arr1 = [];
    for (var i = 0; i <= n; i++) {
        arr1.push(true);
    }
    for (var i = 2; i <= n; i++) {
        if (arr1[i]) {
            arr.push(i);
            for (let j = 1; i * j <= n; j++) {
            arr1[i * j] = false;
            }
        }
    }    
    return arr;
}
console.log(primeNum());

