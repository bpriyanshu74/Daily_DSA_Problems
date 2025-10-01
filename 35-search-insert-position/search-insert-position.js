/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length

    while(l < r){
        let mid = l + Math.floor((r-l)/2)

        if(target == nums[mid]) return mid
        else if(target < nums[mid]) r=mid
        else l = mid + 1
    }
    return l
};