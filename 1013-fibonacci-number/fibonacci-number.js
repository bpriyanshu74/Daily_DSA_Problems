/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    let dp = new Array(n+1).fill(-1)
    
    function dfs(n){
        if(n==0) return 0
        if(n == 1) return 1

        if(dp[n] != -1) return dp[n]

        dp[n] = dfs(n-1)+dfs(n-2)

        return dp[n]
    }
    return dfs(n)
    
};