/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length == 0) return -1
    
    let l = 0, r = nums.length-1

    while(l<=r){
        let mid = Math.floor((r+l)/2)

        if(nums[mid] == target) return mid
        else if(nums[mid] > target) r = mid - 1
        else l = mid+1
    }
    return -1
    
};