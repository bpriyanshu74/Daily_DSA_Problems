/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    // recursion method -- count all the paths

    // function total_paths(i,j,m,n){
    //     if(i==m-1 && j== n-1) return 1
    //     if(i >= m || j >= n) return 0

    //     let right = total_paths(i,j+1,m,n)
    //     let down = total_paths(i+1,j,m,n)

    //     return right+down
    // }

    // return total_paths(0,0,m,n)

    // time complexity is exponential 2^(mxn)

    // we can reduce it by using dp with memoization

    let dp = new Array(m).fill(null).map(() => new Array(n).fill(-1))

    function dynamic_recur(i,j,m,n,dp){
        if(i == m-1 && j == n-1)return 1
        if(i >= m || j >= n) return 0
        if(dp[i][j] != -1) return dp[i][j]

        let right = dynamic_recur(i,j+1,m,n,dp)
        let down = dynamic_recur(i+1,j,m,n,dp)
        
        dp[i][j] = right + down

        return dp[i][j]
    }

    return dynamic_recur(0,0,m,n,dp)
    
};