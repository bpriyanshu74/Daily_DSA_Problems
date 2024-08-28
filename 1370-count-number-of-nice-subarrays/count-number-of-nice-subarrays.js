/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    function helper(arr,goal){
        if(goal < 0) return 0
        let count = 0, left = 0, right = 0, sum = 0
        while(right < arr.length){
            if(arr[right] % 2 != 0){
                sum += 1
            }
            while(sum > goal){
                if(arr[left] % 2 != 0) sum -= 1
                left++
            }
            count += right - left + 1
            right++
        }
        return count
    }
    return helper(nums,k) - helper(nums, k-1)
};