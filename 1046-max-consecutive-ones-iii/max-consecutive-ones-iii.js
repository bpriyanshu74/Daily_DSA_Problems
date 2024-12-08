/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, right = 0, zeros = 0, maxl = 0
    while(right < nums.length){
        if(nums[right] == 0){
            zeros++
        }

        if(zeros > k){
            if(nums[left] == 0){
                zeros--
            }
            left++
        }
        if(zeros <= k){
            len = right - left + 1
            maxl = Math.max(maxl,len)
        }
        
        right++

    }
    return maxl
    
};