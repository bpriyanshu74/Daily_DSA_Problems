/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length
    let dp = Array.from({length: m}, () => new Array(n).fill(0))

    dp[0][0] = grid[0][0]
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(i == 0 && j == 0) continue

            let left = j > 0 ? dp[i][j-1] : Infinity
            let up = i > 0 ? dp[i-1][j] : Infinity

            dp[i][j] = grid[i][j] + Math.min(left, up)
        }
    }

    return dp[m-1][n-1]
    
};