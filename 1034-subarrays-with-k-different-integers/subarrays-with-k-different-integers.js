/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return atMost(nums, k) - atMost(nums, k-1)

    function atMost(nums, k){
        let count = 0, freq = new Map(), l = 0

        for(let r=0; r<nums.length; r++){
            freq.set(nums[r], (freq.get(nums[r]) || 0) + 1)

            while(freq.size > k){
                freq.set(nums[l], freq.get(nums[l]) - 1)
                if(freq.get(nums[l]) == 0) freq.delete(nums[l])
                l++
            }
            count += r-l+1
        }
        return count
    }
    
};