/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k == 0 || k == 1) return 0
    let count = 0, l=0, prod = 1
    for(let r=0; r<nums.length; r++){
        prod *= nums[r]

        while(prod >= k && l <= r){
            prod /= nums[l]
            l++
        }
        count += r-l+1
    }
    return count
};