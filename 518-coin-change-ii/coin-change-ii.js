/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let n = coins.length
    let dp = Array.from({length: n}, () => new Array(amount+1).fill(-1))

    function f(index, amount){
        if(index == 0){
            if(amount % coins[index] == 0) return 1
            return 0
        }
        if(dp[index][amount] != -1) return dp[index][amount]

        let nottake = f(index-1, amount)
        let take = 0
        if(coins[index] <= amount){
            take = f(index, amount - coins[index])
        }

        return dp[index][amount] = take + nottake
    }

    return f(n-1, amount)
};