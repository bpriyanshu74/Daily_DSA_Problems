/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(0)

    dp[0] = 1
    dp[1] = 1

    for(let nodes = 2; nodes <=n; nodes++){
        for(let root = 1; root <= nodes; root++){
            dp[nodes] += dp[root-1] * dp[nodes-root]
        }
    }

    return dp[n]

     
};