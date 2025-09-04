/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let drop = 0, n = nums.length
    for(let i=0; i<nums.length; i++){
        if(nums[i] > nums[(i+1)%n]){
            drop++
        }
    }

    return drop <= 1
    
};