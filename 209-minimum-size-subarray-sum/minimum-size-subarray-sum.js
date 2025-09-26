/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let window = Infinity
    let l = 0, sum = 0

    for(let r = 0; r < nums.length; r++){
        sum += nums[r]
        while(sum >= target){
            window = Math.min(window, r-l+1)
            sum -= nums[l]
            l++
        }
    }

    return window == Infinity ? 0 : window
    
};