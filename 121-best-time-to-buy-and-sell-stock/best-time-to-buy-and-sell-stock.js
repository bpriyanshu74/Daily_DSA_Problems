/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, minprice = Infinity

    for(let price of prices){
        minprice = Math.min(price, minprice)
        profit = Math.max(profit, price - minprice)
    }

    return profit
    
};