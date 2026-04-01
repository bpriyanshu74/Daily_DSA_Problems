/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numset = new Set(nums)
    let numset_arr = Array.from(numset)
    let longest = 0
    for(let num of numset_arr){
        if(numset.has(num-1)) continue
        else{
            let temp = 1
            while(numset.has(num+1)){
                temp++
                num += 1
            }
            longest = Math.max(temp, longest)
        }
    }

    return longest

    
    
};