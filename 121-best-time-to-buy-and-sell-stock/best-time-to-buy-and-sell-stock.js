/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let stack = [], maxp = 0

    for(let p of prices){
        while(stack.length && p < stack[stack.length-1]){
            let sell = stack.pop()
            if(stack.length){
                maxp = Math.max(maxp, sell - stack[0])
            }
        }
        stack.push(p)
    }
    if(stack.length){
        maxp = Math.max(maxp, stack[stack.length-1] - stack[0])
    }

    return maxp
};