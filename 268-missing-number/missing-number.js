/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => a-b)

    let val = 0
    for(let i=0; i<nums.length; i++){
        if(val != nums[i]) return val
        val++
    }
    return val
    
};