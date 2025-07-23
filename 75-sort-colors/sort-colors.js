/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length-1

    function swap(x,y){
        [nums[x], nums[y]] = [nums[y], nums[x]]
    }

    while(mid <= high){
        if(nums[mid] == 0){
            swap(low,mid)
            low++
            mid++
        }
        else if(nums[mid] == 1){
            mid++
        }
        else if(nums[mid] == 2){
            swap(mid, high)
            high--
        }
    }
    
};