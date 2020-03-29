/**
 * You have some number and you are trying to find the nearest square number (a perfect square). 
 * Square number is the number the square root of which is an integer. For example, if we start 
 * with the number 8, then the two nearby square numbers are 4 (sqrt(4) == 2) and 9 (sqrt(9) == 3).
 *  So the answer is 9, because 9 is the nearest.
 * Input: A number.
 * Output: The nearest square number.
 */
function nearestSquare(number) {
    let nearSquare = [];
    for (let i = number; i > 0; i--) {
        if (Number.isInteger(Math.sqrt(i)) === true) {
            nearSquare.push(i);
        }
    } 
    let i = number;
    while (Number.isInteger(Math.sqrt(i)) === false) {
        i++;
        if (Number.isInteger(Math.sqrt(i)) === true) {
            nearSquare.push(i);
        }        
    }
    let nearest = nearSquare[0];
    for (let j = 0; j < nearSquare.length; j++) {        
        if (Math.abs(nearest - number) > Math.abs(nearSquare[j] - number)) {
            nearest = nearSquare[j];
        }
    }
    return nearest;
}
console.log(nearestSquare(8));
console.log(nearestSquare(13));
console.log(nearestSquare(9876));