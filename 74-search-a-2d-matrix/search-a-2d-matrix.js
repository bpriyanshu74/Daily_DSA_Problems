/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n= matrix.length, m = matrix[0].length

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j] == target) return true
        }
    }
    return false
};