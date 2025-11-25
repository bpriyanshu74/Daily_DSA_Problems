/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let dp = Array.from({length: coins.length}, () => new Array(amount+1).fill(-1))

    function f(index, rem_amt){
        if(rem_amt == 0) return 0
        if(index == 0){
            if(rem_amt % coins[0] == 0){
                return rem_amt / coins[0]
            }
            return Infinity
        }

        if(dp[index][rem_amt] != -1) return dp[index][rem_amt]
        

        let nottake = f(index-1, rem_amt)
        let take = Infinity
        if(coins[index] <= rem_amt){
            take = 1 + f(index, rem_amt - coins[index])
        }
    
        return dp[index][rem_amt] = Math.min(take, nottake)
    }

    let ans = f(coins.length-1, amount)

    return ans == Infinity ? -1 : ans
    
};