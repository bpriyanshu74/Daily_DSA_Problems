/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    function helper(arr,goal){
        if(goal < 0) return 0
        let count = 0, left = 0, right = 0, map = new Map()
        while(right < arr.length){
            map.set(arr[right], (map.get(arr[right]) || 0) + 1)
            while(map.size > goal){
                map.set(arr[left], map.get(arr[left]) - 1)
                if(map.get(arr[left]) == 0) map.delete(arr[left])
                left++
            }
            count += right - left + 1
            right++
        }
        return count
    }
    return helper(nums,k) - helper(nums, k-1)
    
};