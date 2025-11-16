/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    for(let num of nums){
        map[num] = (map[num] || 0) + 1

        if(map[num] > Math.floor(nums.length/2)){
            return num
        }
    }
};