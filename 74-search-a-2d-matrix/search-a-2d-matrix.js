/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length

    for(let i=0; i<rows; i++){
        let low = matrix[i][0]
        let high = matrix[i][cols-1]

        if(target >= low && target <= high){
            for(let j=0; j< cols; j++){
                if(matrix[i][j] == target) return true
            }
        }
    }
    return false
    
};