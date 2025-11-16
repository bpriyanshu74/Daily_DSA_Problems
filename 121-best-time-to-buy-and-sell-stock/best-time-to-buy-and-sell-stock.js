/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxp = 0, n = prices.length
    let lb = new Array(n).fill(0), min = Infinity
    let rb = new Array(n).fill(0), max = -Infinity

    for(let i=0; i<prices.length; i++){
        min = Math.min(prices[i], min)
        lb[i] = min
    }

    for(let i=prices.length-1; i >= 0; i--){
        max = Math.max(prices[i], max)
        rb[i] = max
    }

    for(let i=0; i<lb.length; i++){
        maxp = Math.max(maxp, rb[i]-lb[i])
    }

    return maxp
};