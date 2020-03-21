/**
 * In computer science and discrete mathematics, an inversion is a pair of places in a sequence where the elements 
 * in these places are out of their natural order. So, if we use ascending order for a group of numbers, then an 
 * inversion is when larger numbers appear before lower number in a sequence.
 * Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions - 5 and 3; - 5 and 4; - 7 and 6.
 * You are given a sequence of unique numbers and you should count the number of inversions in this sequence.
 * Input: A sequence as a tuple of integers.
 * Output: The inversion number as an integer.
 */
function countInversion(sequence){
    let inversion = [];
    for (let i = 0; i < sequence.length; i++) {
        for (let j = i + 1; j < sequence.length; j++) {
            if (sequence[i] > sequence[j]) {
                inversion.push(sequence[i]);
            }
        }        
    }
    return inversion.length;
}
console.log(countInversion([1, 2, 5, 3, 4, 7, 6]));
console.log(countInversion([0, 1, 2, 3]));
console.log(countInversion([5, 3, 2, 1, 0]));