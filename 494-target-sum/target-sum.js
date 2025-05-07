/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

    let count = 0, index = 0, cur_exp = "", result = [], sum=0

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
    helper(sum, 0)
    return count
    
};