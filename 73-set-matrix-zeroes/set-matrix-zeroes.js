/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows_with_zero = new Set()
    let cols_with_zero = new Set()

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] == 0){
                rows_with_zero.add(i)
                cols_with_zero.add(j)
            }
        }
    }

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(rows_with_zero.has(i) || cols_with_zero.has(j)){
                matrix[i][j] = 0
            }
        }
    }
    
    
};