/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    function findsubarrays(arr, goal){
        if(goal <0) return 0
        let total = 0, count = 0, left = 0, right = 0
        while(right < arr.length){
            total += arr[right]

            while(total > goal){
                total -= arr[left]
                left++
            }

            count += right-left+1
            right++
        }
        return count
    }

    return findsubarrays(nums,goal) - findsubarrays(nums,goal-1)
    
    
};