/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length
    let stack = [], hashmap = new Map(), ans = new Array(n).fill(-1)

    for(let i=0; i<2*n-1; i++){
        let index = i % n
        while(stack.length && nums[index] > nums[stack[stack.length-1]]){
            let previndex = stack.pop()

            ans[previndex] = nums[index]
        }
        if(i < n) stack.push(index)
    }

    return ans
    
};