/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let hashmap = new Map(), count = 0

    for(let num of nums){
        if(num >= k) continue
        let rem = k - num
        if(hashmap.has(rem) && hashmap.get(rem) > 0){
            count++
            hashmap.set(rem, hashmap.get(rem)-1)
            // if(hashmap.get(rem) <= 0) hashmap.delete(rem)
        }else{
            hashmap.set(num, (hashmap.get(num) || 0) + 1)
        }
    }
    return count
};