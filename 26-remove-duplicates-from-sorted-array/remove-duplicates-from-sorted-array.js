/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=0, j=0, set = new Set()
    for(let i=0;i <nums.length; i++){
        if(!set.has(nums[i])){
            set.add(nums[i])
            nums[j] = nums[i]
            j++
            k++
        }
    }

    return k
    
};