/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var j = 0
    var n = nums.length
    for(i=0;i<n;i++){
        if(nums[i] != 0){
            nums[j] = nums[i]
            j += 1
        }
    }
    while(j < n){
        nums[j] = 0
        j += 1
    }
};