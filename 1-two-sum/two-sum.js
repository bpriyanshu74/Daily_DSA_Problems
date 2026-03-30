/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // brute force 

    // for(let i=0; i<nums.length-1; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i] + nums[j] == target) return [i,j]
    //     }
    // }

    // optimise using hashmap

    let hashmap = new Map()

    for(let i=0; i<nums.length; i++){
        let rem = target - nums[i]

        if(hashmap.has(rem)){
            return [i, hashmap.get(rem)]
        }
        hashmap.set(nums[i], i)
    }
};