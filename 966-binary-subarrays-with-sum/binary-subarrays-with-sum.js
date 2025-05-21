/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    // for exact k, we'll need to find for k and k-1 and later subtract k and k-1

    function atMost(arr, k){
        let l=0, r=0, res = 0, sum=0
        while(r < arr.length){
            sum += arr[r]

            while(sum > k && l <= r){
                sum -= arr[l]
                l++
            }
            res += r-l+1
            r++
        }
        return res
    }

    return atMost(nums,goal) - atMost(nums,goal-1)
    
};