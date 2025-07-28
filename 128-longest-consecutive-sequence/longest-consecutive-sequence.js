/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numset = new Set(nums), maxcount = 0

    for(let num of numset){
        let cur = num, count = 1
        if(numset.has(cur-1)) continue

        while(numset.has(cur+1)){
            cur++
            count++
        }

        maxcount = Math.max(count, maxcount)
    }
    return maxcount 
};