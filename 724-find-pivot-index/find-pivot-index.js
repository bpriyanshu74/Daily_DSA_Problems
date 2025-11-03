/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0
    for(let num of nums){
        total += num
    }
    let left = 0
    for(let i=0; i<nums.length; i++){
        let right = total-left-nums[i]

        if(right == left) return i
        left += nums[i]
    }
    return -1
};