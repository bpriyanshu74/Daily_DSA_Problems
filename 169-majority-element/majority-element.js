/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candiate = null, count = 0

    for(let i=0; i<nums.length; i++){
        if(count == 0) candidate = nums[i]

        count += nums[i] == candidate ? 1 : -1
    }

    return candidate
    
};