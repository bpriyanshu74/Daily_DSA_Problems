/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from({length: m}, () => new Array(n).fill(-1))
    function f(i,j){
        if(i==0 && j == 0) return 1
        if(i < 0 || j < 0) return 0

        if(dp[i][j] != -1) return dp[i][j]

        let left = f(i, j-1)
        let right = f(i-1, j)

        return dp[i][j] = left + right
    }

    return f(m-1, n-1)
};