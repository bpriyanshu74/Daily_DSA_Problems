/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let pos = [100000, -1]
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] == target){
            pos[0] = Math.min(pos[0], i)
            pos[1] = Math.max(pos[1], i)
        }
    }

    if(pos[0] == 100000) return [-1,-1]

    return pos


};