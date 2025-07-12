/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxindex = 0
    for(let i=0; i<nums.length; i++){
        if(maxindex < i) return false
        let nextindex = i + nums[i]
        maxindex = Math.max(maxindex, nextindex)
    }
    if(maxindex >= nums.length-1) return true
    return false
    
};