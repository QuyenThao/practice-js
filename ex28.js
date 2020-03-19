/**
 * You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.
For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
Input: A positive integer.
Output: The product of the digits as an integer.
 */
function digitsMultip(data) {
    let sum = 1;
    let input = data.toString();
    for (var i = 0; i < input.length; i++) {
        let item = input[i];
        if (parseInt(item) != 0) {
            sum *= item;
        }
    }
    return sum;
}
console.log(digitsMultip(123405));
console.log(digitsMultip(999));
console.log(digitsMultip(1000));
console.log(digitsMultip(1001));