/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function reverse(arr,i,j)
    {
        while(i<j)
        {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
        return arr
    }
    let breakpoint = -1;
    let n = nums.length;
    for (let i = n - 1; i > 0; i--) 
    {
        if (nums[i] > nums[i - 1]) 
        {
            breakpoint = i - 1;
            break
        }
    }

    if (breakpoint == -1) 
    {
        return reverse(nums, 0, nums.length-1)
    } 
    else 
    {
        // finding the next greater than breakpoint
        for (let i = n-1; i > breakpoint; i--) 
        {
            if (nums[i] > nums[breakpoint]) 
            {
                [nums[i], nums[breakpoint]] = [nums[breakpoint], nums[i]]
                break
            }
        }
        return reverse(nums, breakpoint+1, nums.length-1)
    }
    
};