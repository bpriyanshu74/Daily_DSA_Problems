/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length
    let dp = Array.from({length: n}, () => new Array(m).fill(-1))

    function f(i,j){
        if(i < 0 || j < 0) return 0

        if(dp[i][j] != -1) return dp[i][j]

        let match = text1[i] == text2[j]
        if(match){
            return dp[i][j] = 1 + f(i-1,j-1)
        }else{
            return dp[i][j] = Math.max(f(i-1, j), f(i, j-1))
        }
    }

    return f(n-1, m-1)
};