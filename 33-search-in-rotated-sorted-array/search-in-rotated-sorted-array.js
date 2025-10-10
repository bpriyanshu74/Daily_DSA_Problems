/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1, ans = -1

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        // element found
        if(nums[mid] == target){
            ans = mid
            break
        }
        //first half
        if(nums[mid] >= nums[l]){
            if(target >= nums[l] && target < nums[mid]) r = mid-1
            else l = mid + 1
        }else{
            if((target > nums[mid] && target <= nums[r])) l = mid + 1
            else r = mid - 1
        }
    }
    if(nums[ans] == target){
        return ans
    }

    return -1
    
};