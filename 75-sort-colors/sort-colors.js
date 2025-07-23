/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let freq = new Array(3).fill(0)
    for(let num of nums){
        freq[num]++
    }
    let index = 0
    for(let color = 0; color < 3; color++){
        while(freq[color]-- > 0){
            nums[index++] = color

        }
    }


    
};