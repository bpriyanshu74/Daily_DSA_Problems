/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // obstacle = 1 path = 0
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    let dp = Array.from({length: m}, () => new Array(n).fill(-1))

    function f(i,j){
        if(i < 0 || j < 0 || obstacleGrid[i][j] == 1) return 0
        if(i == 0 && j == 0) return 1

        if(dp[i][j] != -1) return dp[i][j]

        let left = f(i,j-1)
        let up = f(i-1, j)

        return dp[i][j] = up+left
    }

    return f(m-1, n-1)
    
};