/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let ans = new Array(nums.length).fill(0), k=0

    for(let i=0; i<nums.length; i++){
        if(nums[i] != 0){
            ans[k] = nums[i]
            k++
        }
    }

    for(let i=0; i<nums.length; i++){
        nums[i] = ans[i]
    }

    return ans
    
};