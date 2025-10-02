/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let pos = [-1, -1]
    let l = 0, r = nums.length-1

    while(l <= r){
        if(pos[0] == -1){
            if(nums[l] == target){
                pos[0] = l
            }else{
                l++
            }
        }else if(pos[1] == -1){
            if(nums[r] == target){
                pos[1] = r
            }else{
                r--
            }
        }else{
            break
        }
    }

    return pos


};