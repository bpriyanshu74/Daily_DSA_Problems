/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let freq = new Array(3).fill(0)
    for(let num of nums){
        freq[num]++
    }

    let index = 0, cur = 0

    while(true){
        if(index == nums.length) break
        while( cur < 3 && freq[cur] == 0){
                cur++
            }
        freq[cur]--
        nums[index] = cur
        index++
    }
    
};