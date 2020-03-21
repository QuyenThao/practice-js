/**
 * While traveling, the spaceship endures quite a lot of stress. As a result, an important part of the maintenance 
 * is to check the outer hull. Stephan uses a digital durabilitimeter for this task. The device scans a portion of 
 * the spaceships hull and gives a durability map that is divided by small square fragments with measurements. 
 * Sometimes Stephan does not have much time and he can patch only couple points, so we need an algorithm to find 
 * the weak points. The durability map is represented as a matrix with digits. Each number is the durability 
 * measurement for the cell. To find the weakest point we should find the weakest row and column. The weakest 
 * point is placed in the intersection of these rows and columns. Row (column) durability is a sum of cell 
 * durability in that row (column). You should find coordinates of the weakest point (row and column). 
 * The first row (column) is 0th row (column). If a section has several equal weak points, then choose the top left point.
Input: A durability map as a list of lists with integers.
Output: The coordinates of the weak point as a list (tuple) of integers.
 */
function weakPoint(matrix){
    let row, col;
    let sumRow, sumCol;
    let sumRowArr = [];
    let sumColArr = [];
    let minRow, minCol;
    let minRowIndex, minColIndex;
    
    for (let i = 0; i < matrix.length; i++) {
        row = matrix[i];
        sumRow = 0;
        for (let j = 0; j < row.length; j++) {            
            sumRow += row[j];
        }        
        sumRowArr.push(sumRow);
        col = [];
        for (let j = 0; j < matrix.length; j++) {            
            col.push(matrix[j][i]);            
        }
        sumCol = 0;
        for (let h = 0; h < col.length; h++) {
            sumCol += col[h];
        }
        sumColArr.push(sumCol);
    }
    minRow = Math.min(...sumRowArr);
    minCol = Math.min(...sumColArr);   
    minRowIndex = sumRowArr.findIndex(function(x) {
        return x === minRow;
    }); 
    minColIndex = sumColArr.findIndex(function(x) {
        return x === minCol;
    });
    return [minRowIndex, minColIndex];
}
console.log(weakPoint([
    [7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]]));
console.log(weakPoint([
    [7, 2, 4, 2, 8],
    [2, 8, 1, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]]));
console.log(weakPoint([
    [2,5,9,1,3,7,7,7,6,2],
    [7,6,1,9,3,7,6,5,9,4],
    [9,6,3,8,7,8,1,8,7,4],
    [7,5,1,9,2,8,4,4,1,4],
    [8,3,9,8,6,2,9,1,3,2],
    [3,4,1,3,1,6,1,2,6,9],
    [9,4,1,3,4,2,3,6,8,5],
    [1,1,1,4,5,4,9,6,6,5],
    [7,8,5,4,7,6,6,1,4,9],
    [1,3,3,5,2,4,3,3,9,1]]));
console.log(weakPoint([[9,4],[2,6]]));