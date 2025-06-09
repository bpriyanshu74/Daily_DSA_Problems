/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0
    let numset = new Set(nums), maxcount = 0, nums_arr = Array.from(numset)

    for(let i=0; i<nums_arr.length; i++){
        let cur = nums_arr[i]
        let count = 1

        if(numset.has(cur-1)) continue
        
        while(numset.has(cur+1)){
            count++
            cur++
        }   
        
        maxcount = Math.max(maxcount, count)
    }
    return maxcount
    
};