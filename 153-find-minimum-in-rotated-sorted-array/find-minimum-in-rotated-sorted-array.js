/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length-1, min = Infinity

    if(nums[l] <= nums[r]) return nums[0]

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        //first half is sorted
        if(nums[l] <= nums[mid]){
            min = Math.min(min, nums[l])
            l = mid + 1
        }else{
            min = Math.min(min, nums[mid])
            r = mid - 1
        }
    }

    return min
};