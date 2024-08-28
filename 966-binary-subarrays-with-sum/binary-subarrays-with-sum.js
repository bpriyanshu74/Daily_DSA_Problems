/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0
    for(let i=0; i< nums.length; i++){
        let total = 0
        for(let j=i; j<nums.length; j++){
            total += nums[j]
            if(total == goal) count++
        }
    }
    return count
};