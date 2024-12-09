/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {

    let prefixsum = 0, count = 0, map = new Map()
    map.set(0,1)
    for(let i=0; i< nums.length; i++){
        prefixsum += nums[i]

        if(map.get(prefixsum - goal)){
            count += map.get(prefixsum - goal)
        }
        map.set(prefixsum, map.get(prefixsum)+1 || 1)
    }

    return count
    
};