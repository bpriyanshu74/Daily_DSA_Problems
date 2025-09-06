/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // finding the pivot
    let n = nums.length, i = n-2

    while(i >= 0 && nums[i] >= nums[i+1]){
        i--
    }

    if(i >= 0){
        let j = n-1
        while(nums[j] <= nums[i]){
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    // reversing the entire suffix
    let l = i+1, r = n-1
    while(l < r){
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }

    return nums
    
};