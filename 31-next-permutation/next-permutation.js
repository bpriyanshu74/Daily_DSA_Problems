/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let i = nums.length - 1
    let j = nums.length - 1
    // finding index which breaks the increasing order
    while(i >= 0){
        if(nums[i-1] < nums[i]){
            break
        }
        i--
    }
    if(i < 0){
        let low = i+1
    let high = nums.length - 1

    while(low <= high){
        let temp = nums[low]
    nums[low] = nums[high]
    nums[high] = temp
    low++
    high--
    }
    return nums

    }
    i--;
    console.log(i)
    // finding number which is exactly greater than the break point number
    while(j >= 0){
        if(nums[j] > nums[i]){
            break
        }
        j--
    }
    console.log(j)
    // swapping
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp

// reversal
    let low = i+1
    let high = nums.length - 1

    while(low <= high){
        let temp = nums[low]
    nums[low] = nums[high]
    nums[high] = temp
    low++
    high--
    }

    return nums

    
};