/**
 * You are given an array of numbers (floats). You should find the difference between the maximum and minimum element. 
 * Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function 
 * should return 0.Floating-point numbers are represented in computer hardware as base 2 (binary) fractions. So we 
 * should check the result with ±0.001 precision.Think about how to work with an arbitrary number of arguments. 
 * Input: An arbitrary number of arguments as numbers (int, float).
 * Output: The difference between maximum and minimum as a number (int, float).
 */
function mostNumbers(numbers){
    let max = Math.max(...arguments);
    let min = Math.min(...arguments);
    if (arguments.length === 0) {
        return 0;
    } else {
        return max - min;
    }
}

console.log(mostNumbers(1, 2, 3));
console.log(mostNumbers(5, -5));
console.log(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)*1000));
console.log(mostNumbers());