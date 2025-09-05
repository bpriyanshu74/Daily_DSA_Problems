/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let ans = new Set(), th = Math.floor(nums.length/3) 

    let hashmap = new Map()

    for(let num of nums){
        hashmap.set(num, (hashmap.get(num)||0)+1)

        if(hashmap.get(num) > th){
            ans.add(num)
        }
    }

    return Array.from(ans)    
};