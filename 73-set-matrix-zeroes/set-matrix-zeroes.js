/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowzero = 0, colzero = 0

    // checking rowzero and colzero

    let rows = matrix.length, cols = matrix[0].length

    for(let i=0; i<rows; i++){
        if(matrix[i][0] == 0){
            colzero = 1
            break
        }
        
    }

    for(let j=0; j<cols; j++){
        if(matrix[0][j] == 0){
            rowzero = 1
            break
        }
    }

    // checking the internal boxes and setting the first row and col

    for(let i=1; i<rows; i++){
        for(let j=1; j<cols; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    // now setting the internal boxes

    for(let i=1; i<rows; i++){
        for(let j=1; j<cols; j++){
            if(matrix[0][j] == 0 || matrix[i][0] == 0){
                matrix[i][j] = 0
            }
        }
    }

    // now setting the first row and first column

    if(rowzero){
        for(let j=0; j<cols; j++){
            matrix[0][j] = 0
        }
    }

    if(colzero){
        for(let i=0; i<rows; i++){
            matrix[i][0] = 0 
        }
    }

    return matrix
};