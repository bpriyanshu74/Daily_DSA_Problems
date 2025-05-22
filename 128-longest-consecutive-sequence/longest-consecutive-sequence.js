/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length < 1) return 0
    let numset = Array.from(new Set(nums))

    numset.sort((a,b) => a-b)

    let curlen = 1, maxl = 1

    for(let i=1;i<numset.length; i++){
        if(numset[i] == numset[i-1]+1){
            curlen++
        }
        else{
            curlen = 1
        }
        maxl = Math.max(maxl, curlen)
    }

    return maxl
};