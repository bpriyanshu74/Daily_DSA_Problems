/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0
    function helper(sum, index){

        if(index == nums.length){
            if(sum == target){
                count++
            }
            return
        }
        helper(sum+nums[index], index+1)
        helper(sum-nums[index], index+1)
    }
    helper(0,0)
    return count
    
};