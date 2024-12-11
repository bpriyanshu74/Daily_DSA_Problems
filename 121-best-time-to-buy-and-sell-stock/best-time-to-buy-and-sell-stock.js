/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = Infinity, maxprofit = 0
    for(let i=0; i<prices.length; i++){
        minprice = Math.min(minprice, prices[i])
        maxprofit = Math.max(maxprofit ,prices[i]-minprice)
    }
    return maxprofit
};