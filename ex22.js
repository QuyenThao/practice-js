//  Write a JavaScript program to check whether the last digit of the three given positive integers is same.
function lastDigit(a, b, c) {
    if (a % 10 === b % 10 && b % 10 === c % 10) {
        return true;
    } else {
        return false;
    }
}
console.log(lastDigit(1, 36, 51));
console.log(lastDigit(0, 120, 50));