/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for(let i=0; i<nums.length; i++){
        let left = (i===0) ? -Infinity : nums[i-1]
        let right = (i===nums.length-1) ? -Infinity : nums[i+1]
        if(nums[i] > left && nums[i] > right){
            return i
        }
    }

    return -1
    
};