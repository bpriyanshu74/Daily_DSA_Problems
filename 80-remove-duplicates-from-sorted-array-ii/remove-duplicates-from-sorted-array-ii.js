/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length

    let k = 0, freq = 1

    for(let i=1; i<nums.length; i++){
        if(nums[i] == nums[k]){
            if(freq < 2){
                k++
                nums[k] = nums[i]
                freq = 2
            }else{
                continue
            }
        }
        else{
            k++
            nums[k] = nums[i]
            freq = 1
        }
    }

    return k+1
    
};