/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length, cols = matrix[0].length
    let r = 0, c = cols-1

    while(r < rows && c >= 0){
        if(matrix[r][c] == target) return true
        else if(matrix[r][c] < target){
            r++
        }
        else{
            c--
        }
    }
    return false
    
};