/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let freq = new Set()

    for(let num of nums){
        if(freq.has(num)) return num
        freq.add(num)
    }
    
};