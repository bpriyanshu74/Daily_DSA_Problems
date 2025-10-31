/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxavg = -Infinity, sum = 0

    let l=0

    for(let r=0; r<nums.length; r++){
        sum += nums[r]
        if(r-l+1 == k){
            maxavg = Math.max(maxavg, sum/k)
            sum -= nums[l]
            l++
        }
    }
    return maxavg
};