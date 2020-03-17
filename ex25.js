/**
 * A median is a numerical value separating the upper half of a sorted array of numbers from the lower half.In a list 
 * where there are an odd number of entities, the median is the number found in the middle of the array. If the array
 *  contains an even number of entities, then there is no single middle value, instead the median becomes the average
 * of the two numbers found in the middle. For this mission, you are given a non-empty array of natural numbers (X). 
 * With it, you must separate the upper half of the numbers from the lower half and find the median.
 */
function median(data) {
    let medianNumber;
    data.sort(function(a, b) {
        return a - b;
    });
    if (data.length % 2 == 1) {
        medianNumber = data[Math.floor(data.length / 2)];
       
    } else {
        medianNumber = (data[data.length / 2 - 1] + data[data.length / 2 ]) / 2;
    }
    return medianNumber;
}

console.log(median([1, 2, 3, 4, 5]));
console.log(median([3, 1, 2, 5, 3]));
console.log(median([1, 300, 2, 200, 1]));
console.log(median([3, 6, 20, 99, 10, 15]));
