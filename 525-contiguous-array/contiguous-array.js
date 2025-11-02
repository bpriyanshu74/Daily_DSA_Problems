/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let freq = {0:-1}, maxl = 0, prefix = 0

    for(let i=0; i<nums.length; i++){
        prefix += nums[i] == 0 ? -1 : 1
        if(prefix in freq){
            maxl = Math.max(maxl, i - freq[prefix])
        }else{
            freq[prefix] = i
        }
    }
    return maxl
    
};