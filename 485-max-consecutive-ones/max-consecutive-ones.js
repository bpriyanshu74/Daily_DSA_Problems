/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var maxOnes = 0
    var count = 0
    for(i=0;i<nums.length;i++){
        if(nums[i] == 1){
            count += 1
        }
        else {
            maxOnes = Math.max(count,maxOnes)
            count = 0
        }
    }
    return Math.max(count,maxOnes)
};