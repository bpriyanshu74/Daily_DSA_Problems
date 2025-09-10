/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [], n = nums.length, ans = new Array(nums.length).fill(-1)

    for(let i=0; i<2*n-1; i++){
        let index = i % n
        while(stack.length && nums[index] > nums[stack[stack.length-1]]){
            ans[stack.pop()] = nums[index]
        }
        if(i < n){
            stack.push(index)
        }
    }

    return ans


    
};