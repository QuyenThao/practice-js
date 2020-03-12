// Write a JavaScript program to find the longest string from a given array.
function longestStr(arr) {
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (longest.length < arr[i].length) {
            longest = arr[i];
        }
    }
    console.log(longest);
}

longestStr(['h', 'ello', 'world.','js'])