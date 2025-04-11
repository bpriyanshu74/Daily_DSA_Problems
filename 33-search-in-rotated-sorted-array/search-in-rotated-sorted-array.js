/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(nums[mid] == target) return mid

        if(nums[l] <= nums[mid]){
            if(nums[l] <= target && nums[mid] >= target){
                r = mid-1
            }
            else{
                l = mid+1
            }
        }
        else{
            if(nums[mid] <= target && target <= nums[r]){
                l = mid+1
            }
            else{
                r = mid - 1
            }

        }
    }
    return -1
    
};