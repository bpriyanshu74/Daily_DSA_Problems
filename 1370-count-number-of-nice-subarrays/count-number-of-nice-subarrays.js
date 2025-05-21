/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    // trying k and k-1 logic

    function atMost(arr,k){
        let l=0, r=0, count = 0, odd_count = 0
        while(r < arr.length){
            if(arr[r]%2!= 0){
                odd_count++
            }
            while(odd_count > k){
                if(arr[l] % 2 != 0){
                    odd_count--
                }
                l++
            }
            count += r-l+1
            r++
        }
        return count
    }
    return atMost(nums, k) - atMost(nums, k-1)
};