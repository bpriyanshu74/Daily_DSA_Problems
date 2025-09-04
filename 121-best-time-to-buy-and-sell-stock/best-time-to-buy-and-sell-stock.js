/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    let sell = new Array(n).fill(0)

    let maxm = prices[n-1]

    for(let i=n-1; i>=0; i--){
        maxm = Math.max(maxm, prices[i])
        sell[i] = maxm
    }

    let ans = 0

    for(let i=0; i<n; i++){
        ans = Math.max(ans, sell[i]-prices[i])
    }

    return ans
    
};