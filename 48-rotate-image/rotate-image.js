/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rows = matrix.length, cols = matrix[0].length

    for(let i=0; i<rows; i++){
        for(let j=i; j<cols; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    // now reverse each row

    for(let row of matrix){
        reverse(row)
    }

    return matrix

    function reverse(arr){
        let l = 0, r = arr.length-1

        while(l < r){
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }
};