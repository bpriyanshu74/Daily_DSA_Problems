/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // transpose of the matrix
    let rows = matrix.length
    let cols = matrix[0].length

    for(let i=0; i< rows; i++){
        for(let j=i+1; j< cols; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    // now reversing the rows
    for(let ele of matrix){
        let right = matrix[0].length-1
        let left = 0
        while(left <= right){
            [ele[left],ele[right]] = [ele[right], ele[left]]
            left++
            right--
        }
    }
    return matrix
};