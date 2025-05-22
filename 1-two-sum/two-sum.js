/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // brute force:

    // for(let i=0; i<nums.length-1; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i] + nums[j] == target){
    //             return [i,j]
    //         }
    //     }
    // }
    // return [-1,-1]
    // TC = O(n2)

    let hashmap = new Map()

    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]

        if(hashmap.has(diff)){
            return [i, hashmap.get(diff)]
        }

        hashmap.set(nums[i], i)
    }
    return [-1,-1]
};