/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // brute force
    let maxsum = nums[0]
    let i=1, cursum = nums[0]

    while(i < nums.length){
        cursum = Math.max(nums[i], cursum+nums[i])
        maxsum = Math.max(cursum, maxsum)
        i++
    }

    return maxsum
};