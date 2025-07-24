/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    // vertical reversal
    let left = 0, right = n-1
    while(left < right){
        [matrix[left], matrix[right]] = [matrix[right], matrix[left]]
        left++
        right--
    }

    for(let row = 0; row < n; row++){
        for(let col = row+1; col < n; col++){
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
        }
    }

    
};