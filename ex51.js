/**
 * Determine whether the sequence of elements items is ascending so that its each element is strictly larger than 
 * (and not merely equal to) the element that precedes it.
 * Input: Iterable with ints.
 * Output: Bool.
 */
function isAscending(items) {
    if (items.length <= 1) {
        return true;
    } 
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= items[i + 1]) {
            return false;
        } 
    }
    return true;
}
console.log(isAscending([-5, 10, 99, 123456]));
console.log(isAscending([4, 5, 6, 7, 3, 7, 9]));
console.log(isAscending([]));
console.log(isAscending([1, 1, 1, 1]));