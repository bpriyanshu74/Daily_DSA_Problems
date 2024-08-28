/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    function helper(arr,k){
        let left=0,right=0,count=0, total=0
        while(right<arr.length){
            if(k < 0) return 0
            total+=arr[right]
            while(total > k){
                total -= arr[left]
                left++
            }
            count += right-left+1
            right++
        }
        return count

    }
    return helper(nums,goal) - helper(nums,goal-1) 

    
};