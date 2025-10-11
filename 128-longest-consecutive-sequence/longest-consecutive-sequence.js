/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)

    let longest = 0

    for(let num of set){
        if(!set.has(num-1)){
            let count = 1
            while(set.has(num+1)){
                count += 1
                num += 1
            }
            longest = Math.max(count, longest)
        }
    }
    return longest

};