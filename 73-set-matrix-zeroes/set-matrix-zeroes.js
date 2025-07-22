/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zero_rows = new Set(), zero_cols = new Set()
    for(let i=0; i< matrix.length; i++){
        for(let j=0; j< matrix[0].length; j++){
            if(matrix[i][j] == 0){
                zero_rows.add(i)
                zero_cols.add(j)
            }
        }
    }

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j< matrix[0].length; j++){
            if(zero_rows.has(i) || zero_cols.has(j)){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
    
};