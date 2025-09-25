/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length == 1) return nums
    let k = 0, zero_count = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] != 0){
            nums[k] = nums[i]
            k++
        }else{
            zero_count++
        }
    }

    let n = nums.length

    for(let i=n-1; i>=0; i--){
        if(zero_count == 0) break
        nums[i] = 0
        zero_count--
    }

    return nums
};