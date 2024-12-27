/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let res = []
    let majority = Math.floor(nums.length / 3)

    let frequency = new Map()

    for(let i=0; i< nums.length; i++){
        frequency.set(nums[i], (frequency.get(nums[i]) || 0) + 1)
    }

    for(let i=0; i< nums.length; i++){
        if(frequency.get(nums[i]) > majority) res.push(nums[i])
    }

    let result = new Set(res)
    return Array.from(result)    
};