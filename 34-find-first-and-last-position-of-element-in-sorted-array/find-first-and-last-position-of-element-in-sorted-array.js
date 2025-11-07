/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let pos = [-1, -1]

    function lowerbound(){
        let l=0, r=nums.length

        while(l < r){
            let mid = l + Math.floor((r-l)/2)

            if(nums[mid] < target) l = mid + 1
            else r = mid
        }
        return l
    }

    function upperbound(){
        let l=0, r = nums.length

        while(l < r){
            let mid = l + Math.floor((r-l)/2)

            if(nums[mid] <= target) l = mid + 1
            else r = mid
        }
        return l
    }

    let lb = lowerbound()
    let ub = upperbound() - 1

    if(nums[lb] == target) pos[0] = lb
    if(nums[ub] == target) pos[1] = ub

    return pos
};