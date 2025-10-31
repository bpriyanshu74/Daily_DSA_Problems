/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sq = new Array(nums.length).fill(0)

    for(let i=0; i<nums.length; i++){
        sq[i] = nums[i] * nums[i]
    }

    sq.sort((a,b) => a-b)
    return sq

    
};