/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let col0 = 1, m = matrix.length, n = matrix[0].length

    // marking the row 0 and col 0
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0
                if(j!= 0){
                    matrix[0][j] = 0
                }
                else{
                    col0 = 0
                }
            }
        }
    }
    // altering the rest of the matrix
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            if(matrix[i][j] != 0){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0
                }
            }
        }
    }

    // altering the first row and first column

    if(matrix[0][0] == 0){
        for(j=0; j < n; j++){
            matrix[0][j] = 0
        }
    }
    if(col0 == 0){
        for(let i=0; i<m; i++){
            matrix[i][0] = 0
        }
    }

    return matrix
};