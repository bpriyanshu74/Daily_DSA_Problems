/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    // we'll use 0,1 balancing in this -> marking even as 0 odd as 1

    // [1,1,0,1,1]

    let count = 0, prefix = 0, freq = {0:1}

    for(let i=0; i<nums.length; i++){
        prefix += nums[i] % 2 == 0 ? 0 : 1

        if(prefix-k in freq){
            count += freq[prefix-k]
        }
        freq[prefix] = (freq[prefix] || 0) + 1
    }

    return count


};