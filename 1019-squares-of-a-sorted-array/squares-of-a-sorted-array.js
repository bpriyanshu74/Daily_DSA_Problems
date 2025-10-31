/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sq = new Array(nums.length).fill(0)

    let l=0, r = nums.length-1, k = nums.length-1

    while(l <= r){
        let leftsq = nums[l] * nums[l]
        let rightsq = nums[r] * nums[r]

        if(leftsq < rightsq){
            sq[k] = rightsq
            r--
        }else{
            sq[k] = leftsq
            l++
        }
        k--
    }
    return sq
};