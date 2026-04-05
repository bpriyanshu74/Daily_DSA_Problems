/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let prefix = new Array(nums.length).fill(1)
  let suffix = new Array(nums.length).fill(1)

  for(let i=1; i<nums.length; i++){
    prefix[i] = prefix[i-1] * nums[i-1]
  }

  for(let i=nums.length-2; i>= 0; i--){
    suffix[i] = suffix[i+1] * nums[i+1]
  }

  for(let i =0; i<nums.length; i++){
    nums[i] = prefix[i] * suffix[i]
  }

  return nums


    
};