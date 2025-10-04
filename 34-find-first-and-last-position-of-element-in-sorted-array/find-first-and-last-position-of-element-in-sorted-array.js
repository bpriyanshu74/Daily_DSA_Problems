/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let pos = [-1, -1]
    function lowerbound(){
        let l=0, r = nums.length
        while(l < r){
            let mid = l + Math.floor((r-l)/2)

            if(nums[mid] >= target) r = mid
            else l = mid + 1
        }

        if(nums[l] == target) pos[0] = l
    }

    function upperbound(){
        let l = 0, r = nums.length

        while(l < r){
            let mid = l + Math.floor((r-l)/2)

            if(nums[mid] <= target) l = mid+1
            else r = mid
        }

        if(nums[l-1] == target) pos[1] = l-1
    }

    lowerbound()
    upperbound()

    return pos

};