/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map(), sum = 0, maxl = 0
    map.set(0, -1)

    for(let i=0; i<nums.length; i++){
        sum += nums[i] == 0 ? -1 : 1
        if(map.has(sum)){
            maxl = Math.max(maxl, i - map.get(sum))
        }else{
            map.set(sum, i)
        }
        
    }
    return maxl
};