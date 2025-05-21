/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(k < 0) return 0

    let hashmap = new Map(), count = 0

    for(let i=0; i<nums.length; i++){
        hashmap.set(nums[i], (hashmap.get(nums[i]) || 0) + 1)
    }

    for(let [key,value] of hashmap.entries()){
        if(k == 0){
            if(value > 1) count++
        }
        else{
            if(hashmap.has(key+k)) count++
        }
    }
    return count
    
};