/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let n = coins.length
    let dp = Array.from({length: n}, () => new Array(amount+1).fill(0))

    for(let amt = 0; amt <= amount; amt++){
        dp[0][amt] = amt % coins[0] == 0 ? 1 : 0
    }

    for(let index = 1; index < n; index++){
        for(let amt = 0; amt <= amount; amt++){
            let nottake = dp[index-1][amt]
            let take = 0
            if(coins[index] <= amt){
                take = dp[index][amt - coins[index]]
            }
            dp[index][amt] = take + nottake
        }
    }

    return dp[n-1][amount]
    
    
};