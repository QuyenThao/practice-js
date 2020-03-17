// Write a JavaScript program to convert a given number to hours and minutes.
function timeConvert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + ':' + minutes;
}
console.log(timeConvert(12));
console.log(timeConvert(235));
console.log(timeConvert(120));
console.log(timeConvert(1024));