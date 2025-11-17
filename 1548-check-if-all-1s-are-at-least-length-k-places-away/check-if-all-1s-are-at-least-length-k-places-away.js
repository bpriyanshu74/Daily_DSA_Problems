/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let last = -1
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            if(i-last > i){
                last = i
            }else{
                if(i-last-1 < k) return false
                else{
                    last = i
                }
            }
        }
    }
    return true
};