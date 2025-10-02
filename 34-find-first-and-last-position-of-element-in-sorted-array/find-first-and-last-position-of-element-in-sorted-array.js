/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function lowerbound(){
        let l = 0, r = nums.length

        while(l < r){
            let mid = l + Math.floor((r-l)/2)
            if(nums[mid] < target) l = mid + 1
            else r = mid
        }
        if(nums[l] == target) return l
        return -1
    }

    function upperbound(){
        let l = 0, r = nums.length

        while(l < r){
            let mid = l + Math.floor((r-l)/2)

            if(nums[mid] <= target) l = mid + 1
            else r = mid
        }
        if(nums[l-1] == target) return l-1
        return -1
    }

    return [lowerbound(), upperbound()]


};