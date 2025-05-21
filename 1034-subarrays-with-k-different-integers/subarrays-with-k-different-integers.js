/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {

    function atMost(arr,k){
        let l=0, r=0, total=0, hashset = new Map()
        while(r < arr.length){
            hashset.set(arr[r], (hashset.get(arr[r])||0) + 1)

            while(hashset.size > k){
                hashset.set(arr[l], hashset.get(arr[l])-1)
                if(hashset.get(arr[l]) == 0){
                    hashset.delete(arr[l])
                }
                l++
            }
            total += r-l+1
            r++
        }
        return total
    }

    return atMost(nums,k) - atMost(nums,k-1)
    
};