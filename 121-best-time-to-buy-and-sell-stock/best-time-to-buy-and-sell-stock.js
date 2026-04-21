/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, minprice = Infinity

    for(let i=0; i<prices.length; i++){
        minprice = Math.min(prices[i], minprice)

        profit = Math.max(profit, prices[i] - minprice)
    }

    return profit 


};