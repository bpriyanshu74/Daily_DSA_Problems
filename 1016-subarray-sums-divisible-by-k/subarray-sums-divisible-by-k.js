/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0, freq = {0:1}, prefix = 0

    for(let i=0; i<nums.length; i++){
        prefix = (nums[i] + prefix) % k

        if(prefix < 0) prefix += k

        count += (freq[prefix] || 0)

        freq[prefix] = (freq[prefix] || 0 ) + 1
    }
    return count
    
};