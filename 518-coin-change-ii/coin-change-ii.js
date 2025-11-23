/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let n = coins.length
    let dp = Array.from({length: n}, () => new Array(amount+1).fill(0))

    for(let i = 0; i<=amount; i++){
        dp[0][i] = i % coins[0] == 0 ? 1 : 0
    }

    for(let i=1; i<n; i++){
        for(let j=0; j<=amount; j++){
            let nottake = dp[i-1][j]

            let take = 0
            if(coins[i] <= j){
                take = dp[i][j-coins[i]]
            }

            dp[i][j] = take + nottake
        }
    }
    return dp[n-1][amount]

    
};