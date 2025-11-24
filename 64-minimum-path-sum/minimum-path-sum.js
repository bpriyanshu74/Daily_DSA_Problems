/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length
    let dp = Array.from({length: m}, () => new Array(n).fill(-1))

    function f(i,j){
        if(i == 0 && j == 0){
            return grid[0][0]
        }
        if(i < 0 || j < 0) return Infinity

        if(dp[i][j] != -1) return dp[i][j]

        let left = f(i, j-1)
        let up = f(i-1, j)

        return dp[i][j] =  grid[i][j] + Math.min(left, up)
    }

    return f(m-1, n-1)
    
};