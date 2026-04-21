/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0, r = nums.length-1, mid = l

    while(mid <= r){
        if(nums[mid] == 0){
            swap(l, mid)
            mid++
            l++
        }else if(nums[mid] == 1){
            mid++
        }else{
            swap(mid, r)
            r--
        }
    }

    function swap(i,j){
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
};