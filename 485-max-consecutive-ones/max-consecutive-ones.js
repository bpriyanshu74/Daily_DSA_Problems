/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0, maxcount = -Infinity
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            count++
        }
        else{
            maxcount = Math.max(maxcount, count)
            count = 0
        }
    }
    maxcount = Math.max(maxcount, count)
    return maxcount
    
};