/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = new Map()
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        if(hashmap.has(diff)) return [i, hashmap.get(diff)]
        else{
            hashmap.set(nums[i], i)
        }
    }
};