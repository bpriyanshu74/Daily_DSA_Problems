/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length, k=0
    nums.sort((a,b) => a-b)

    for(let num of nums){
        if(num == k){
            k++
        }
        else{
            return k
        }
    }
    return n
};