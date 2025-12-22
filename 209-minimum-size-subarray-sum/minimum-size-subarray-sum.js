/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0, sum = 0, minm = nums.length, zero = true

    for(let r = 0; r<nums.length; r++){
        sum += nums[r]

        while(sum >= target){
            zero = false
            minm = Math.min(r-l+1, minm)
            sum -= nums[l++]
        }
    }
    return zero ? 0 : minm
};