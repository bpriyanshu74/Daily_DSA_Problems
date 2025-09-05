/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // two step -- transpose and reverse the rows

    for(let i=0; i<matrix.length; i++){
        for(let j=i+1; j<matrix[0].length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for(let row of matrix){
        let l = 0, r = row.length-1
        while(l < r){
            [row[l], row[r]] = [row[r], row[l]]
            l++
            r--
        }
    }
    return matrix
};