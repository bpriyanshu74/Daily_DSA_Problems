/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let temp = [...temperatures]

    let ans = new Array(temp.length).fill(0)

    let stack = []

    for(let i=0; i<temp.length; i++){
        while(stack.length && temp[i] > temp[stack[stack.length-1]]){
            let index = stack.pop()
            ans[index] = i-index
        }
        stack.push(i)
    }

    return ans
};