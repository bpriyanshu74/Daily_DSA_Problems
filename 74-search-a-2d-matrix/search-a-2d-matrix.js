/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // optimised solution
    let m = matrix.length-1, n = matrix[0].length-1
    let [x,y] = [0,n]

    while(x <= m && y >= 0){
        let val = matrix[x][y]
        if(val == target) return true

        if(val > target){
            y--
        }
        else{
            x++
        }
    }

    return false
    
};