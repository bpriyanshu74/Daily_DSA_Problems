/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // prefixsum + hashmap

    let hashmap = new Map(), prefixsum = 0, count = 0
    hashmap.set(0,1)

    for(let num of nums){
        prefixsum += num
        count += hashmap.get(prefixsum-k) || 0

        hashmap.set(prefixsum, (hashmap.get(prefixsum) || 0)+1)
    }

    return count
    
};