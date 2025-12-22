/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length-1

    while(mid <= high){
        if(nums[mid] == 0){
            swap(mid, low)
            low++
            mid++
        }else if(nums[mid] == 1){
            mid++
        }else{
            swap(mid, high)
            high--
        }
    }

    function swap(x,y){
        [nums[x], nums[y]] = [nums[y], nums[x]]
    }
    return nums
};