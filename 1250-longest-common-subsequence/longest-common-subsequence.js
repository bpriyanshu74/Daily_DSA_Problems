/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length
    let dp = Array.from({length: n+1}, () => new Array(m+1).fill(0))

    // for(let i=0; i<=n; i++){
    //     if(text1[0] == text2[0]) dp[0][i] = 0
    // }
    // for(let i=0; i<m; i++){
    //     if(text1[0] == text2[0]) dp[i][0] = 0
    // }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(text1[i-1] == text2[j-1]) dp[i][j] = 1 + dp[i-1][j-1]
            else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    return dp[n][m]


    // function f(i,j){
    //     if(i < 0 || j < 0) return 0

    //     if(dp[i][j] != -1) return dp[i][j]

    //     let match = text1[i] == text2[j]
    //     if(match){
    //         return dp[i][j] = 1 + f(i-1,j-1)
    //     }else{
    //         return dp[i][j] = Math.max(f(i-1, j), f(i, j-1))
    //     }
    // }

    // return f(n-1, m-1)
};