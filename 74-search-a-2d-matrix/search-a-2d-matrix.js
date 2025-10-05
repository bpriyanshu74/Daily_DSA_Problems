/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length, m = matrix[0].length

    let i=0, j= m-1

    while(i < n && j >= 0){
        if(matrix[i][j] == target) return true
        else if(matrix[i][j] < target) i++
        else j--
    }
    return false
};