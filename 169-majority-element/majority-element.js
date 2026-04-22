/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ht = {}

    for(let num of nums){
        ht[num] = (ht[num] || 0) + 1
    }

    let freq = 0, maj_ele = -1

    for(let [key,val] of Object.entries(ht)){
        if(val > freq){
            freq = val
            maj_ele = Number(key)
        }
    }

    return maj_ele


};