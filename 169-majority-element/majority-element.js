/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = Math.floor(nums.length/2)

    let hashmap = new Map()

    for(let num of nums){
        hashmap.set(num, (hashmap.get(num)||0)+1)
        if(hashmap.get(num) > n) return num
    }
    
};