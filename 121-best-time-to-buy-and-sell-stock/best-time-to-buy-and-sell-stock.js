/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // for optimising track maxm from the last index
    let profit = 0

    let maxprices = new Array(prices.length).fill(-1), maxprice = 0

    for(let i=prices.length-1; i>= 0; i--){
        maxprice = Math.max(prices[i], maxprice)
        maxprices[i] = maxprice
    }

    for(let i=0; i<prices.length; i++){
        if(maxprices[i] - prices[i] > 0){
            profit = Math.max(profit, maxprices[i]-prices[i])
        }
    }

    return profit


    
};