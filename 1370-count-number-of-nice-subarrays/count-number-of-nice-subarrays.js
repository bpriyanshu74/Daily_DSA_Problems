/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let count = 0, map = {0:1}, prefix = 0

    for(let num of nums){
        prefix += num % 2 == 0 ? 0 : 1
        if(prefix-k in map){
            count += map[prefix-k]
        }
        map[prefix] = (map[prefix] || 0) + 1
    }

    return count
};