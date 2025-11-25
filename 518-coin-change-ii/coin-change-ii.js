/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let n = coins.length
    let dp = Array.from({length: n}, () => new Array(amount+1).fill(-1))

    function f(index, rem_amt){
        if(index == 0){
            if(rem_amt % coins[0] == 0) return 1
            else{
                return 0
            }
        }
        if(dp[index][rem_amt] != -1) return dp[index][rem_amt]

        let nottake = f(index-1, rem_amt)
        let take = 0
        if(coins[index] <= rem_amt){
            take = f(index, rem_amt - coins[index])
        }

        return dp[index][rem_amt] = take + nottake
    }

    return f(coins.length-1, amount)
    
};