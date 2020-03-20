/**You are given a state for a rectangular board game grid with chips in a binary matrix, 
 * where 1 is a cell with a chip and 0 is an empty cell. You are also given the coordinates 
 * for a cell in the form of row and column numbers (starting from 0). You should determine 
 * how many chips are close to this cell. Every cell interacts with its eight neighbours; 
 * those cells that are horizontally, vertically, or diagonally adjacent. 
 */

function countNeighbours(data, row, col) {
    let chips;
    let cellRow = data[row];
    let prevCellRow = data[row - 1];
    let nextCellRow = data[row + 1];

    if (row > 0 && row < data.length - 1 && col > 0 && col < cellRow.length - 1 ) {        
        chips = cellRow[col - 1] + cellRow[col + 1] + prevCellRow[col] + prevCellRow[col - 1] + prevCellRow[col + 1] 
                + nextCellRow[col] + nextCellRow[col - 1] + nextCellRow[col + 1];
    } else if (row === 0 && col === 0) {
        chips = cellRow[col + 1] + nextCellRow[col] + nextCellRow[col + 1];
    } else if (col === cellRow.length - 1 && row === data.length - 1) {
        chips = cellRow[col - 1] + prevCellRow[col] + prevCellRow[col - 1];
    } else if (col === cellRow.length - 1 && row === 0) {
        chips = cellRow[col - 1] + nextCellRow[col] + nextCellRow[col - 1];
    } else if (row === data.length - 1 && col === 0) {        
        chips = cellRow[col + 1] + prevCellRow[col] + prevCellRow[col + 1];
    } else if (col === cellRow.length - 1 ) {
        chips = cellRow[col - 1] + prevCellRow[col] + prevCellRow[col - 1] + nextCellRow[col] + nextCellRow[col - 1] ;
    } else if (row === 0) {
        chips = cellRow[col - 1] + cellRow[col + 1] + nextCellRow[col] + nextCellRow[col - 1] + nextCellRow[col + 1];
    } else if (row === data.length - 1) {
        chips = cellRow[col - 1] + cellRow[col + 1] + prevCellRow[col] + prevCellRow[col - 1] + prevCellRow[col + 1];
    } else if (col === 0) {
        chips = cellRow[col + 1] + prevCellRow[col] + prevCellRow[col + 1] + nextCellRow[col] + nextCellRow[col + 1];
    }  
    
    return chips;
}
console.log(countNeighbours([
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]], 1, 2));
console.log(countNeighbours([
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]], 0, 0));
console.log(countNeighbours([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]], 0, 2));
console.log(countNeighbours([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]], 1, 1));
console.log(countNeighbours([
    [1,1,1],
    [1,1,1],
    [1,1,1]],1,2));
console.log(countNeighbours([
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,1,1,0,1],
    [0,1,0,1,0]],5,0));