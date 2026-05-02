/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hm = {}

    for(let i=0; i<nums.length; i++){
        let rem = target - nums[i]

        if(hm[rem] != undefined){
            return [i, hm[rem]]
        }

        hm[nums[i]] = i
    }

    return [-1,-1]
};