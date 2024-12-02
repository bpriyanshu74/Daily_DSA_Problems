/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, sum = 0, windowsize = Infinity
    while(right < nums.length){
        sum += nums[right]
        if(sum >= target){
            while(right-left+1 > 0 && sum-nums[left] >= target){
                sum -= nums[left]
                left++
            }
            windowsize = Math.min(windowsize, right-left+1)
        }
        right++
    }
    return windowsize == Infinity ? 0 : windowsize
    
};