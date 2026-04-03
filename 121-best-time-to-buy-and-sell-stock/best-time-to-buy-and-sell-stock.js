/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0

    let profit = 0

    // for(let i=0; i<prices.length-1; i++){
    //     for(let j=i+1; j<prices.length; j++){
    //         profit = Math.max(profit, prices[j] - prices[i])
    //     }
    // }

    // optimise the n2 time complexity

    let buy = new Array(prices.length).fill(0)
    let sell = new Array(prices.length).fill(0)

    for(let i=0; i<prices.length; i++){
        if(i == 0) buy[i] = prices[i]
        else{
            buy[i] = Math.min(prices[i], buy[i-1])
        }
    }

    for(let i=prices.length-1; i>= 0; i--){
        if(i == prices.length-1) sell[i] = prices[i]
        else{
            sell[i] = Math.max(prices[i], sell[i+1])
        }
    }

    for(let i=0; i<prices.length; i++){
        profit = Math.max(profit, sell[i] - buy[i])
    }
    return profit
};