/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums), maxcount = 0

    for(let num of set){
        if(!set.has(num-1)){
            let count = 1
            while(set.has(num+1)){
                count++
                num += 1
            }
            maxcount = Math.max(count, maxcount)
        }
    }

    return maxcount
    
};