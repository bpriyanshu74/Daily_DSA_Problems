/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minlen = Infinity

    let l = 0, sum = 0

    for(let r=0; r<nums.length; r++){
        sum += nums[r]
        while(sum >= target){
            minlen = Math.min(minlen, r-l+1)
            sum -= nums[l]
            l++
        }
    }

    return minlen == Infinity ? 0 : minlen
};