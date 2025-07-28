/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // brute force
    if(nums.length < 4) return []

    let res = new Set()
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            let hashset = new Set()
            for(let k=j+1; k<nums.length; k++){
                let sum = nums[i]+nums[j]+nums[k]
                let need = target - sum
                if(hashset.has(need)){
                    let quad = [nums[i], nums[j], nums[k], need].sort((a,b) => a-b)
                    res.add(quad.toString())
                }
                hashset.add(nums[k])    
            }
        }
    }
    return Array.from(res).map(str => str.split(',').map(Number));
};