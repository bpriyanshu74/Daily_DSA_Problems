/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    var count = 0
    for(i=1;i<nums.length;i++){
        if(nums[i-1] > nums[i]) count+=1;
    }
    if(nums[nums.length - 1] > nums[0]) count += 1;
    console.log(count)
    return count <= 1;
};