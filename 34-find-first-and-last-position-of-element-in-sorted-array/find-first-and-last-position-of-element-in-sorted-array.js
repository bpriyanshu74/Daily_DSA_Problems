/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    function lowerBound() {
        let l = 0, r = nums.length;
        while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) l = mid + 1;
        else r = mid;
        }
        return l;
    }
    function upperBound() {
        let l = 0, r = nums.length;
        while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] <= target) l = mid + 1;
        else r = mid;
        }
        return l-1;
    }

    let res = [-1, -1]
    let first = lowerBound()
    let last = upperBound()

    if(nums[first] == target) res[0] = first
    if(nums[last] == target) res[1] = last

    return res
    
};