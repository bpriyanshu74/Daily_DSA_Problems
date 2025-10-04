/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // optimising using binary search

    let l = 0, r = nums.length

    while(l < r){
        let mid = l + Math.floor((r-l)/2)

        if(nums[mid] < nums[mid+1]){
            l = mid + 1
        }
        else{
            r = mid
        }
    }
    return l
};