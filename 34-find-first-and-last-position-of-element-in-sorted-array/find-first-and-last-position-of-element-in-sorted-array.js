/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function binarySearch(arr, target, l, r){
        while(l <= r){
            let mid = Math.floor(l + (r-l)/2)
            if(arr[mid] == target){
                return mid
            }
            else if(arr[mid] > target){
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        return -1
    }
    let l = 0, r = nums.length - 1
    let index = binarySearch(nums, target, l, r)
    let tempindex = index, res = []
    
    while(index >= 0 && nums[index-1] == target) index--
    res.push(index)

    while(tempindex <= nums.length-1 && nums[tempindex+1] == target) tempindex++
    res.push(tempindex)

    return res
    
};