/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // first we need to find the index where nums[i] < nums[i+1]

    let n = nums.length, i = n-2

    while(i >= 0 && nums[i] >= nums[i+1]){
        i--
    }

    if(i >= 0){
        let j = n-1

        while(j>= 0 && nums[j] <= nums[i]){
            j--
        }
        // swapping
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    // now reversing from i+1 to n-1

    let p = i+1, q = n-1
    while(p < q){
        [nums[p], nums[q]] = [nums[q], nums[p]]
        p++
        q--
    }

    

    
};