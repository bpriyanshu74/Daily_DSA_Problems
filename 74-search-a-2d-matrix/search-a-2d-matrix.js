/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(matrix[i][j] == target) return true
        }
    }

    return false
    
};