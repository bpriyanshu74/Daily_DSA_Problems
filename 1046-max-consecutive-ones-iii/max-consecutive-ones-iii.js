/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxl = 0, l =0, zcount = 0

    for(let r=0; r<nums.length; r++){
        if(nums[r] == 0) zcount++
        while(zcount > k){
            if(nums[l] == 0){
                zcount--
            }
            l++
        }
        maxl = Math.max(maxl, r-l+1)
    }
    return maxl
};