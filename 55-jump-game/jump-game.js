/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxreach = 0

    for(let i=0; i<nums.length; i++){
        if(i > maxreach) return false
        maxreach = Math.max(maxreach, i+nums[i])
    }
    return true
    
};