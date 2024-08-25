/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    function atmostk(k){
        let count = 0, l=0, r = 0, map= new Map()
        while(r < nums.length){
            if(map.has(nums[r])){
                map.set(nums[r] ,map.get(nums[r])+1)
            }
            else{
                map.set(nums[r], 1)
            }
            while(map.size > k){
                map.set(nums[l] ,map.get(nums[l])-1)
                if(map.get(nums[l]) == 0) map.delete(nums[l])
                l++
            }
            count += r-l+1
            r++
        }
        return count
    }

    return atmostk(k) - atmostk(k-1)
    
};