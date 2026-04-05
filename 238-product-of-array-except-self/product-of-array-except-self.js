/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1, suffix = 1

    let result = new Array(nums.length).fill(1)

    for(let i=0; i<nums.length; i++){
        result[i] = prefix
        prefix *= nums[i]
    }

    for(let i=nums.length-1; i>= 0; i--){
        result[i] *= suffix
        suffix *= nums[i]
    }

    return result
};