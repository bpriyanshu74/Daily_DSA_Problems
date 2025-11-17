/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let n = dungeon.length, m = dungeon[0].length
    let dp = Array.from({length: n+1}, () => Array(m+1).fill(Infinity))

    dp[n-1][m] = 1
    dp[n][m-1] = 1

    for(let i=n-1; i>=0; i--){
        for(let j=m-1; j>=0; j--){
            let need = Math.min(dp[i+1][j], dp[i][j+1])
            dp[i][j] = Math.max(1, need-dungeon[i][j])
        }
    }

    return dp[0][0]
};