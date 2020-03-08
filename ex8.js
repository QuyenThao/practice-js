/**
 * The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1,
 *  and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. 
 * Write a function that takes in an integer n and returns the nth Fibonacci number. 
 */

function getNthFib(n) {
    // Write your code here.
    if (n == 1) {
		return 0;
	} else if (n == 2) {
		return 1;
	} else {
		return getNthFib(n - 1) + getNthFib(n - 2);
	}
}
console.log(getNthFib(1)); // 0
console.log(getNthFib(2)); // 1
console.log(getNthFib(6)); // 5
console.log(getNthFib(25)); // 46368
console.log(getNthFib(47)); // 1836311903
