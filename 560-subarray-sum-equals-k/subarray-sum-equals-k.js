/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map(), prefixsum = 0, count = 0, compliment = 0
    map.set(0,1)
    for(let i=0; i< nums.length; i++){
        prefixsum += nums[i]

        if(map.get(prefixsum-k)){
            count += map.get(prefixsum-k)
        }

        map.set(prefixsum, map.get(prefixsum)+1 || 1)
    }
    return count
};