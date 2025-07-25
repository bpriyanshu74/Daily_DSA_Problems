/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let arr = new Array(nums.length).fill(false)

    for(let num of nums){
        if(arr[num] == true) return num
        arr[num] = true
    }
    
};