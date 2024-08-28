/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0,1)
    let left = 0, sum = 0, count = 0
    while(left < nums.length){
        sum += nums[left]
        let prefix = sum - k
        if(map.has(prefix)){
            count += map.get(prefix)
        }
        map.set(sum, (map.get(sum) || 0) +1)
        left++
    }
    return count
    
};