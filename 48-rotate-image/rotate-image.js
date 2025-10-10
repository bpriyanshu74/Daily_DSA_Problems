/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // doing transpose only on the upper half

    for(let i=0; i<matrix.length; i++){
        for(let j=i; j<matrix[0].length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    // now reverse each row

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