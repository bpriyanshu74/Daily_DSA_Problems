/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    let newMatrix = new Array(n).fill().map(() => new Array())
    let indexi = 0
    for(let i=0; i<n; i++){
        for(let j=n-1; j >= 0; j--){
            let ele = matrix[j][i]
            if(newMatrix[indexi].length == n) indexi++

            newMatrix[indexi].push(ele)
            
        }
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            matrix[i][j] = newMatrix[i][j]
        }
    }

    
};