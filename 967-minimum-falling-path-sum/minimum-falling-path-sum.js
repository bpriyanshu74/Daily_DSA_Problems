/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let m = matrix.length, n = matrix[0].length
    let dp = Array.from({length: m}, () => new Array(n).fill(0))


    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(i==0) dp[i][j] = matrix[i][j]
            else{
                let up = Infinity, left = Infinity, right = Infinity
                if(i > 0) up = matrix[i][j] + dp[i-1][j]
                if(i > 0 && j > 0) left = matrix[i][j] + dp[i-1][j-1]
                if(i > 0 && j < n-1) right = matrix[i][j] + dp[i-1][j+1]

                dp[i][j] = Math.min(up,left, right)
            }
        }
    }
    return Math.min(...dp[dp.length-1])
    
};