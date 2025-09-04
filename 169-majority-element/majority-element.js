/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null, count = 0

    for(let i=0; i<nums.length; i++){
        if(count == 0) candidate = nums[i]

        count += candidate == nums[i] ? 1 : -1
    }

    return candidate
    
};