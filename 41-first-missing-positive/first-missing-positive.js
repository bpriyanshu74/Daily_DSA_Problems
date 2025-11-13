/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length

    for(let i=0; i<nums.length; i++){
        while(nums[i] > 0 && nums[i] <= n && nums[nums[i]-1] != nums[i]){
            let correct_index = nums[i] - 1
            let temp = nums[i];
            nums[i] = nums[correct_index];
            nums[correct_index] = temp;
        }
    }

    for(let i=0; i<nums.length; i++){
        if(nums[i] != i+1) return i+1
    }
    return n + 1
};