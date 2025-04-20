/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let n = nums.length
    // i=0
    if(nums.length == 1 || nums[0] != nums[1]) return nums[0]
    // i=n-1
    if(nums[n-1] != nums[n-2]) return nums[n-1]

    // even for first occur
    // odd for repeat

    let l=1, r= nums.length-2
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]){
            return nums[mid]
        }
        if(mid % 2 == 0){
            if(nums[mid] == nums[mid+1]){
                l = mid + 1
            }
            else{
                r = mid - 1
            }
        }
        if(mid % 2 == 1){
            if(nums[mid] == nums[mid-1]){
                l = mid + 1
            }
            else{
                r = mid - 1
            }
        }
    }
    return -1
};