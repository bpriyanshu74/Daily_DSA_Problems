/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxl = 0, count = 0
    for(let i=0; i<nums.length; i++){
        
        if(nums[i] === 1){
            count++
        }
        else{
            maxl = Math.max(maxl, count)
            count = 0
        }
    }
    maxl = Math.max(maxl, count)

    return maxl
    
};