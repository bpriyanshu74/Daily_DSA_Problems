/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashmap = new Map()

    for(let num of nums){
        if(hashmap.has(num)) return true
        else{
            hashmap.set(num, 1)
        }
    }
    return false
};