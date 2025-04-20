/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(nums[mid] == target) return true

        if(nums[mid] == nums[l] && nums[mid] == nums[r]){
            l+=1
            r-=1
            continue
        }

        if(nums[mid] >= nums[l]){
            // left part is sorted
            if(target >= nums[l] && target <= nums[mid]){
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        else{
            // right part is sorted
            if(target <= nums[r] && target >= nums[mid]){
                l = mid + 1
            }
            else{
                r = mid -1
            }
        }
    }
    return false
    
};