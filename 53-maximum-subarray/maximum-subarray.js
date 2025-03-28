/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxsum = -Infinity, cursum = 0;
    for(let i=0; i<nums.length; i++){
        cursum += nums[i]
        maxsum = Math.max(cursum, maxsum)
        if(cursum < 0){
            cursum = 0
        }
    }
    return maxsum
    
};