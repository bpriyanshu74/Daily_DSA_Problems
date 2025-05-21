/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // this will be done using prefix sum
    let prefixsum = 0, hashmap = new Map(), count = 0
    hashmap.set(0,1)
    for(let i=0; i<nums.length; i++){
        prefixsum += nums[i]

        if(hashmap.has(prefixsum-k)){
            count += hashmap.get(prefixsum-k)
        }

        hashmap.set(prefixsum, (hashmap.get(prefixsum)||0)+1)
    }

    return count
    
};