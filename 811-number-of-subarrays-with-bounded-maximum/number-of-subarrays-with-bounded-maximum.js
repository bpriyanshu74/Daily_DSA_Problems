/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    let start = -1, end = -1, result = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] > right){
            start=end=i
            continue
        }
        if(nums[i] >= left){
            end=i
        }
        result += end - start
    }
    return result
};