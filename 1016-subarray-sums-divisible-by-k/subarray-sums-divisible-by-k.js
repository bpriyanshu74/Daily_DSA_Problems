/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0, map = {0:1}, prefix = 0

    for(let i=0; i<nums.length; i++){
        prefix = (prefix + nums[i]) % k
        if(prefix < 0) prefix += k

        count += map[prefix] || 0

        map[prefix] = (map[prefix] || 0) + 1
    }
    return count
    
};