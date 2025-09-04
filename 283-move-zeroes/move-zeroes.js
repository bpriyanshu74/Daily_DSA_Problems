/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let stk = []

    for(let i=nums.length-1; i>= 0; i--){
        if(nums[i] != 0){
            stk.push(nums[i])
        }
    }
    let i=0
    while(stk.length){
        nums[i] = stk.pop()
        i++
    }
    while(i < nums.length){
        nums[i] = 0
        i++
    }

    return nums
    
};