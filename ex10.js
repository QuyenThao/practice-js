//Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
function maxArr(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    let newArr = arr.map(function(num) {
        return num = max;
    })
    console.log(newArr);
} 
maxArr([2, 5, 4, 11]);
maxArr([-7, -9, 0]);
maxArr([2, 9, 4, -7, 0, -5]);