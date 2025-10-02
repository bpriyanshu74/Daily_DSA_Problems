/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length <= 1) return 0
    let newnums = [-Infinity,...nums, -Infinity]
    for(let i=1; i<newnums.length-1; i++){
        if(newnums[i] > newnums[i-1] && newnums[i] > newnums[i+1]) return i-1
    }


    
};