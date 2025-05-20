/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l=0, r=0, max_count = 0, count=0

    while(r < nums.length){
        if(nums[r] == 0){
            count++
        }
        while(count > k){
            if(nums[l] == 0){
                count--
            }
            l++
        }
        max_count = Math.max(max_count, r-l+1)
        r++
    }
    return max_count
};