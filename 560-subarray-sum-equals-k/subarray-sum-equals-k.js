/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    for(let i=0; i<nums.length; i++){
        let total = 0
        for(let j=i; j<nums.length; j++){
            total += nums[j]
            if(total == k){
                count++
            }
        }
    }
    return count
    
};