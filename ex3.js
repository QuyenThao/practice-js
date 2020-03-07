//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sum(a, b) {
    if (a == b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
    
}

console.log(sum(10, 6));
console.log(sum(5, 5));