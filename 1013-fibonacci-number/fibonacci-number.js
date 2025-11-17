/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = new Array(n+1).fill(-1)

    function dfs(x){
        if(x <= 1) return x
        
        if(dp[x] != -1) return dp[x]

        dp[x] = dfs(x-1) + dfs(x-2)

        return dp[x]
    }
    return dfs(n)
   
};