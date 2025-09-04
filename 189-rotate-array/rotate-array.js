/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length
    k = k % n 

    let a = nums.slice(0, n-k), b = nums.slice(n-k)

    let new_arr = [...b, ...a]

    for(let i=0; i<nums.length; i++){
        nums[i] = new_arr[i]
    }

    return nums
    
};