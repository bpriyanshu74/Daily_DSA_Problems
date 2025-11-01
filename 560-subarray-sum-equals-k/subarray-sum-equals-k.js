/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // using prefix sum

    let map = {}, sum = 0, count = 0
    map[0] = 1

    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        if(map[sum-k]){
            count += map[sum-k]
        }
        map[sum] = (map[sum] || 0) + 1
    }
    return count
};