/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = [], dq = []

    for(let i=0; i<nums.length; i++){
        // removal of left most index
        if(dq.length && dq[0] <= i-k){
            dq.shift()
        }

        // removal from top

        while(dq.length && nums[i] >= nums[dq[dq.length-1]]){
            dq.pop()
        }

        dq.push(i)

        if(i >= k - 1){
            result.push(nums[dq[0]])
        }
    }
    return result
};