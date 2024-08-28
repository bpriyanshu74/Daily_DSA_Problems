/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let map = new Map()
    map.set(0,1)
    let left = 0, sum = 0, res = 0
    while(left < nums.length){
        if(nums[left] % 2 != 0){
            sum += 1
        }
        else{
            sum += 0
        }
      
        prefix = sum - k
        if(map.has(prefix)){
            res+= map.get(prefix)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
        
        left++
    }
    return res
};