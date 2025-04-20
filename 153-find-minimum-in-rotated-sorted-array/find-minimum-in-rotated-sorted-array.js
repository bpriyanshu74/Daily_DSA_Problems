/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l =0, r = nums.length-1, minm = Infinity
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        // checking which half is sorted
        if(nums[mid] >= nums[l]){
            minm = Math.min(nums[l], minm)
            l = mid + 1
        }
        else{
            minm = Math.min(nums[mid], minm)
            r = mid - 1
        }
    }
    return minm
    
};