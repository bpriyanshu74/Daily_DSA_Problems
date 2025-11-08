/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let temp = [...temperatures], n = temp.length, stack = []

    let ans = new Array(n).fill(0)

    for(let i=0; i<n; i++){
        while(stack.length && temp[i] > temp[stack[stack.length-1]]){
            let index = stack.pop()
            ans[index] = i-index
        }
        stack.push(i)
    }
    
    return ans
};