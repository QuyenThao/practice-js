//Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple their absolute difference if the specified number is greater than 19
function diff(num) {
    let d = Math.abs(num - 19);
    if (d > 19) {
        return d * 3;
    } else {
        return d;
    }
}

console.log(diff(10));
console.log(diff(-10));