/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let target = nums.reduce((a,b) => a+b, 0) - x

    if(target < 0) return -1
    if(target == 0) return nums.length

    let map = {0: -1}, maxl = -Infinity, sum = 0

    for(let i=0; i<nums.length; i++){
        sum += nums[i]

        if(sum-target in map){
            maxl = Math.max(maxl, i - map[sum-target])
        }
        if (!(sum in map)) { // store first occurrence only
            map[sum] = i;
        }
        
    }
    return maxl == -Infinity ? -1 : nums.length - maxl
};