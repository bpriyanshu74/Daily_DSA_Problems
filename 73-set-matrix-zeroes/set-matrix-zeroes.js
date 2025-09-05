/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // checking whether colzero or rowzero possible
    let colzero = false
    for(let row=0; row < matrix.length; row++){
        if(matrix[row][0] == 0){
            colzero = true
            break
        }
    }

    let rowzero = false
    for(let col = 0; col < matrix[0].length; col++){
        if(matrix[0][col] == 0){
            rowzero = true
            break
        }
    }
    // setting up first row and first col

    for(let i=1; i<matrix.length; i++){
        for(let j=1; j<matrix[0].length; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for(let i=1; i<matrix.length; i++){
        for(let j=1; j<matrix[0].length; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
                matrix[i][j] = 0
            }
        }
    }

    if(colzero){
        for(let row=0; row < matrix.length; row++){
            matrix[row][0] = 0
        }
    }
    if(rowzero){
        for(let col = 0; col < matrix[0].length; col++){
            matrix[0][col] = 0
        }
    }

    return matrix
    
};