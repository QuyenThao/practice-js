/**
 * Your mission here is to create a function that gets an array and returns a tuple with 3 elements - the first, 
 * third and second to the last for the given array.
 * Input: A tuple, at least 3 elements long.
 * Output: A tuple.
 */
function easyUnpack(elements) {
    let first = elements[0];
    let third = elements[2];
    let lastSecond = elements[elements.length -2];
    return [first, third, lastSecond];
}
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));