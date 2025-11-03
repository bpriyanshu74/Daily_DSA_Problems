/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefix = new Array(nums.length).fill(0), psum = 0
    let suffix = new Array(nums.length).fill(0), ssum = 0

    for(let i=0; i<nums.length; i++){
        psum += nums[i]
        prefix[i] = psum
    }
    for(let i=nums.length-1; i>=0; i--){
        ssum += nums[i]
        suffix[i] = ssum
    }

    for(let i=0; i<nums.length; i++){
        if(prefix[i] == suffix[i]) return i
    }

    return -1
    
};