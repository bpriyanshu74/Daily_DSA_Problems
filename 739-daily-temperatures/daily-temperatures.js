/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [], n = temperatures.length, ans = new Array(n).fill(0)

    for(let i=0; i<n; i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            let prevday = stack.pop()
            ans[prevday] = i - prevday
        }
        stack.push(i)
    }

    return ans
    
};