/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0, high = nums.length-1, mid = 0

    function swap(i,j){
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    while(mid <= high){
        if(nums[mid] == 0){
            swap(mid,low)
            mid++
            low++
        }
        else if(nums[mid] == 1){
            mid++
        }
        else{
            swap(mid, high)
            high--
        }
    }
    return nums
    
};