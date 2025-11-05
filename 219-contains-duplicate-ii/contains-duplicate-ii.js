/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let freq = {}

    for(let i=0; i<nums.length; i++){
        if(nums[i] in freq){
            if(i - freq[nums[i]] <= k) return true
        }
        freq[nums[i]] = i
    }

    return false
};