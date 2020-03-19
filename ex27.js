/**"Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.

You should write a function that will receive a positive integer and return:
"Fizz Buzz" if the number is divisible by 3 and by 5;
"Fizz" if the number is divisible by 3;
"Buzz" if the number is divisible by 5;
The number as a string for other cases.
Input: A number as an integer.

Output: The answer as a string. */
function fizzBuzz(data) {
    if (data % 3 == 0 && data % 5 == 0) {
        return "Fizz Buzz";
    } else if (data % 3 == 0) {
        return "Fizz";
    } else if (data % 5 == 0) {
        return "Buzz";
    } else {
        return typeof(data.toString());
    }
}
console.log(fizzBuzz(15));
console.log(fizzBuzz(6));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));