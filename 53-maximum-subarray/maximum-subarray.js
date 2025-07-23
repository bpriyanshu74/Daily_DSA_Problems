/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let l = 0, r = 0, maxsum = -Infinity, sum = 0
    while(r < nums.length){
        sum += nums[r]
        r++
        maxsum = Math.max(sum, maxsum)
        if(sum < 0){
            l = r
            sum = 0
        }
    }

    return maxsum
    
};