/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map(), prefix = 0, count = 0
    map.set(0, 1)

    for(let i=0; i<nums.length; i++){
        prefix += nums[i]

        if(map.has(prefix-k)){
            count += map.get(prefix-k)
        }

        map.set(prefix, (map.get(prefix) || 0) + 1)
    }

    return count
};