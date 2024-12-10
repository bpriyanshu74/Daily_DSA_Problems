/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length

    let rowset = new Array(m).fill(0)
    let colset = new Array(n).fill(0)

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j] == 0){
                rowset[i] = 1
                colset[j] = 1
            }
        }
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(rowset[i] == 1 || colset[j] == 1){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
    
};