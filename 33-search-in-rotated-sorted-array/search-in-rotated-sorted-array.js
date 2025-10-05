/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0, r = nums.length-1

    while(l < r){
        let mid = l + Math.floor((r-l)/2)
        if(nums[mid] > nums[r]){
            l = mid + 1
        }else{
            r = mid
        }
    }
    let breakpoint = l
    l = 0, r = nums.length-1
    
    if(target >= nums[breakpoint] && target <= nums[r]){
        l = breakpoint
    }else{
        r = breakpoint - 1
    }

    while( l <= r ){
        let mid = l + Math.floor((r-l)/2)

        if(nums[mid] == target){
            return mid
        }
        else if(nums[mid] < target){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }

    return -1
};