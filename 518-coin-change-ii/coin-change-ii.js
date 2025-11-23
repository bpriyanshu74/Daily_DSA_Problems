/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let n = coins.length
    let dp = Array.from({length: n}, () => new Array(amount+1).fill(-1))

    function recur(index, amt){
        if(amt == 0) return 1
        if(index == n || amt < 0) return 0

        if(dp[index][amt] != -1) return dp[index][amt]

        let take = recur(index, amt - coins[index])
        let nottake = recur(index+1, amt)

        return dp[index][amt] = take + nottake

    }

    return recur(0, amount)
    
    
};