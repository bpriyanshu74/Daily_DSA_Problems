/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // nums.sort((a,b) => a-b)
    let l = 0, r = nums.length-1

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)

        if(nums[mid] == target) return mid
        else if(nums[mid] > target) r = mid - 1
        else{
            l = mid + 1
        }
    }
    return -1
};