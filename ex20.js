// Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.
// Return true if it increasing & return false if it decreasing
function is_monotonous(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            return true;
        } else {
            return false;  
    }
}
}
console.log(is_monotonous([10, 6, -2]));
console.log(is_monotonous([1, -6, 9]));
console.log(is_monotonous([-5, -3, 0]));