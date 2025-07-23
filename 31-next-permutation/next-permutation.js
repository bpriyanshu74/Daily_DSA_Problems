/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    function swap(x,y){
        [nums[x], nums[y]] = [nums[y], nums[x]]
    }
    let i = nums.length-2

    // finding the first small number from the last

    while(i >= 0 && nums[i]>= nums[i+1]) i--

    // checking whether we found or not

    if(i >= 0){
        // finding the first big number to swap
        let j = nums.length-1
        while(nums[j] <= nums[i]) j--
        swap(i,j)
    }

    // reversing the suffix
    let left = i+1, right = nums.length-1
    while(left < right){
        swap(left, right)
        left++
        right--
    }
    
};