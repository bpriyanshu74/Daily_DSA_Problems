/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let n = word1.length, m = word2.length
    let dp = Array.from({length: n}, () => new Array(m+1).fill(-1))

    function f(i,j){
        if( i<0) return j+1
        if(j < 0) return i+1

        if(dp[i][j] != -1) return dp[i][j]

        if(word1[i] == word2[j]){
            return dp[i][j] = f(i-1, j-1)
        }else{
            let insert = 1 + f(i, j-1)
            let dlt = 1 + f(i-1, j)
            let replace = 1 + f(i-1, j-1)

            return dp[i][j] = Math.min(insert, dlt, replace)
        }
    }

    return f(n-1, m-1)
};