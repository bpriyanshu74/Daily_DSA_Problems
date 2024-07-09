/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefixProduct = 1
    let suffixProduct = 1
    let n = nums.length
    let result = new Array(n).fill(1)

    for(let i = 0; i<nums.length; i++){
        result[i] = prefixProduct
        prefixProduct *= nums[i]
    }
    for(let i = nums.length - 1; i>= 0; i--){
        
        result[i] *= suffixProduct
        suffixProduct *= nums[i]
    }
    return result
};