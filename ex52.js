/**
 * In mathematics, particularly in linear algebra, a skew-symmetric matrix (also known as an antisymmetric or antimetric) 
 * is a square matrix A which is transposed and negative. This means that it satisfies the equation A = −AT. If the entry 
 * in the i-th row and j-th column is aij, i.e. A = (aij) then the symmetric condition becomes aij = −aji.
 * You should determine whether the specified square matrix is skew-symmetric or not.
 * Input: A square matrix as a list of lists with integers.
 * Output: If the matrix is skew-symmetric or not as a boolean.
 */
function symmetric(matrix) {
    let matrix1, matrix2;
    for (let i = 0; i < matrix.length; i++) {
        matrix1 = [];
        for (let j = 0; j < matrix.length; j++) {
            matrix1.push(matrix[i][j] * -1); 
        }
        matrix2 = [];
        for (let j = 0; j < matrix.length; j++) {
            matrix2.push(matrix[j][i]); 
        }

        for (let h = 0; h < matrix.length; h++) {
            if (matrix1[h] !== matrix2[h]) {
                return false;
            }
        }
    }
    return true;
    
}
console.log(symmetric([
    [0, 1, 2],
    [-1, 0, 1],
    [-2, -1, 0]]));
console.log(symmetric([
    [0, 1, 2],
    [-1, 1, 1],
    [-2, -1, 0]]));