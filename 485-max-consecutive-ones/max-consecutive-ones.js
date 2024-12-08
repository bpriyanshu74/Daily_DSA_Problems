/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left=0, right=0, len=0, maxl = 0
    while(right < nums.length){
        if(nums[right] == 1){
            len = right-left+1
        }
        else{
            left = right+1
        }
        maxl = Math.max(maxl, right-left+1)
        right++
    }

    return maxl
    
};