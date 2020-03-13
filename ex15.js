// Write a JavaScript function to find the highest value in an array.
function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}   
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));