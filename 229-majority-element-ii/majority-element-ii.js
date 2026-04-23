/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let hashmap = new Map()
    let ans = new Set()

    for(let num of nums){
        hashmap.set(num, (hashmap.get(num) || 0) + 1)

        if(hashmap.get(num) > Math.floor(nums.length/3)){
            ans.add(num)
        }
    }

    return Array.from(ans)
};