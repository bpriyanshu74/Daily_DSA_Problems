/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0

    let map = new Map(), prefix = 0
    map.set(0, 1)

    for(let num of nums){
        prefix += num

        if(map.has(prefix - k)){
            count += map.get(prefix - k)
        }

        map.set(prefix, (map.get(prefix) || 0) + 1)
    }

    return count
    
};