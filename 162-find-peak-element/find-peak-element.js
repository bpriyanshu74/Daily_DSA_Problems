/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length == 1) return 0
    if(nums.length == 2){
        if(nums[0] > nums[1]) return 0
        else return 1
    }
    // brute force
    let index = -1
    for(let i=1; i<nums.length-1; i++){
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]){
            return i
        }
    }
    // for first index greatest of all
    let firstmax = 0, flag1 = 1
    for(let i=1; i<nums.length; i++){
        if(nums[0] < nums[i]){
            flag1 = 0
            break
        }
    }
    if(flag1) return firstmax
    // for last element greatest of all
    let lastmax = nums.length-1, flag2 = 1
    for(let i=nums.length-2; i>=0; i--){
        if(nums[i] > nums[lastmax]){
            flag2 = 0
            break
        }
    }
    if(flag2) return lastmax
    
};