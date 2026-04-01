/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let hm = {}

    // for(let i=0; i<nums.length; i++){
    //     let rem = target - nums[i]

    //     if(hm[rem]){
    //         return [i, hm[rem]]
    //     }else{
    //         hm[nums[i]] = i
    //     }
    // }

    let hashmap = new Map()

    for(let i=0; i<nums.length; i++){
        let rem = target - nums[i]

        if(hashmap.has(rem)){
            return [i, hashmap.get(rem)]
        }else{
            hashmap.set(nums[i], i)
        }
    }
};