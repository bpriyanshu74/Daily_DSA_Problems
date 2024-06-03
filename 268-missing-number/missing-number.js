/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    function recursiveSum(n){
        if(n == 0){
            return 0
        }
        return n + recursiveSum(n-1)
    }

    var n = nums.length
    var actualSum = recursiveSum(n)
    var givenSum = 0
    for(i=0;i<n;i++){
        givenSum += nums[i]
    }
    return actualSum - givenSum
    
};