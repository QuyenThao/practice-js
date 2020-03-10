//  Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.

function maxDiff(arr) {
    let diffArr = [];
    let diff = 0;
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        diff = Math.abs(arr[i] - arr[i + 1]);
        diffArr.push(diff);
    }
    for (let j = 0; j < diffArr.length; j++) {
        if (max < diffArr[j]) {
            max = diffArr[j];
        }
    }
    return max;
}

console.log(maxDiff([-5, 1, 6, 3, -7]));