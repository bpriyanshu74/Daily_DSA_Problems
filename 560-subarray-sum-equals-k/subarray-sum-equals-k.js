/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let hashmap = {0:1}, cursum = 0, count = 0

    for(let num of nums){
        cursum += num

        if(hashmap[cursum-k] != undefined){
            count += hashmap[cursum-k]
        }

        hashmap[cursum] = (hashmap[cursum] || 0) + 1
    }

    return count
};