/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length, stack = []

    let ans = new Array(n).fill(-1)

    for(let i=0; i<2*n; i++){
        let idx = i % n 

        while(stack.length && nums[stack[stack.length-1]] < nums[idx]){
            let index = stack.pop()
            ans[index] = nums[idx]
        }

        stack.push(idx)
    }

    return ans
};