/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0, freq = new Map(), prefix = 0
    freq.set(0, 1)

    for(let i=0; i<nums.length; i++){
        prefix += nums[i]

        if(freq.has(prefix - goal)){
            count += freq.get(prefix-goal)
        }

        freq.set(prefix, (freq.get(prefix) || 0) + 1)
    }

    return count
};