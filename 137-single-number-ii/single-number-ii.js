/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {}

    for(let num of nums){
        map[num] = (map[num] || 0) + 1
    }

    for(let [num,freq] of Object.entries(map)){
        if(freq == 1) return Number(num)
    }
};